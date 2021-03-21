import 'core-js/es/object/assign';
import 'core-js/es/array/includes';
import StorageJS from '@timeone-group/storage-js';
import QueryString from 'query-string';
import { AppError, Severity } from '@timeone-group/error-logger-js';
import { v4 } from '@lukeed/uuid';
import JsSHA from 'jssha';
import Global from './Global';
import ConsentStatus from './ConsentStatus';

const buildCollectedFromQuery = (query, config) => {
  const parsedQueryString = QueryString.parse(query);

  return config
    .map((toCollect) => ({
      name: toCollect.field,
      value: parsedQueryString[toCollect.param] || null,
    }))
    .filter((param) => param.value !== null);
};

const flattenToObject = (array) => {
  const flattenObject = {};
  array.forEach((object) => {
    flattenObject[object.name] = object.value;
  });
  return flattenObject;
};

const buildAnonymusPageFromLocation = (location) =>
  `${location.protocol}//${location.host}${location.pathname}`;

const buildAnonymusReferer = (referer) => {
  if (referer) {
    return referer.split('?').shift();
  }
  return '';
};

class TWA {
  constructor(id, config) {
    this.id = id;
    this.config = config;
    this.consentStatus = new ConsentStatus(id);
    this.setConsentStatus(this.getConsentStatus());
  }

  getConfig() {
    return this.config;
  }

  getSavedTrace() {
    const saved = this.store.find(Global.TRACE_KEY);
    return saved.trace || {};
  }

  getConsentStatus() {
    return this.consentStatus.get() || 'exempt';
  }

  getSalt() {
    const savedSalt = this.storeSession.find(Global.SALT_KEY);
    if (!savedSalt.salt) {
      savedSalt.salt = v4();
      this.setSalt(savedSalt.salt);
    }
    return savedSalt.salt;
  }

  setSalt(salt) {
    this.storeSession.save({ id: Global.SALT_KEY, salt });
  }

  saveTrace(trace) {
    this.store.save({
      id: Global.TRACE_KEY,
      trace,
    });
  }

  buildAnonymiseEvent(event) {
    const anonymiseEvent = Object.assign(event, {});

    if (event.type === 'lead' || event.type === 'sale') {
      let eventId;
      eventId = v4();
      if (event.convId) {
        eventId = event.convId;
        delete anonymiseEvent.convId;
      }
      const shaObj = new JsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
      shaObj.update(`${this.getSalt()}${eventId}`);
      anonymiseEvent.conv_id = shaObj.getHash('HEX');
    }

    return anonymiseEvent;
  }

  pushEvent(event) {
    const anonymiseEvent = this.buildAnonymiseEvent(event);

    const toSaveEvent = Object.assign(
      anonymiseEvent,
      this.buildTrace(window.location.search),
      {
        page: buildAnonymusPageFromLocation(window.location),
        referer: buildAnonymusReferer(window.document.referrer),
        time: new Date().getTime(),
      }
    );
    // eslint-disable-next-line no-console
    console.log(toSaveEvent);
  }

  getAllDatas() {
    return this.store.findAll();
  }

  clearAll() {
    const events = this.getAllDatas();
    events.forEach((event) => this.store.delete(event.id));
  }

  buildTrace(query) {
    const toSaveTrace = {
      ...this.getSavedTrace(),
      ...flattenToObject(buildCollectedFromQuery(query, this.config)),
    };
    this.saveTrace(toSaveTrace);

    return toSaveTrace;
  }

  setConsentStatus(status) {
    this.consentStatus.set(status);
    switch (status) {
      case 'optin':
      case 'exempt':
        this.store = new StorageJS({
          storageEngine: 'localStorage',
          prefix: Global.STORAGE_PREFIX,
          defaultTTL: Global.STORAGE_DEFAULT_TTL,
        });
        this.storeSession = new StorageJS({
          storageEngine: 'sessionStorage',
          prefix: Global.STORAGE_PREFIX,
          defaultTTL: Global.STORAGE_DEFAULT_TTL,
        });
        break;
      case 'optout':
        if (this.store) this.clearAll();
        this.store = new StorageJS({
          storageEngine: 'InApp',
          prefix: Global.STORAGE_PREFIX,
          defaultTTL: Global.STORAGE_DEFAULT_TTL,
        });
        this.storeSession = this.store;
        break;
      default:
        throw new AppError(Severity.ERROR, 'Unknow status');
    }
  }
}

export default TWA;

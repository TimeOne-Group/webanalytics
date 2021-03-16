import 'core-js/es/object/assign';
import 'core-js/es/array/includes';
import StorageJS from '@timeone-group/storage-js';
import QueryString from 'query-string';

const TRACE_KEY = 'trace';

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
    this.store = new StorageJS({ prefix: 'TWA', defaultTTL: 34164000 });
  }

  getConfig() {
    return this.config;
  }

  getSavedTrace() {
    const saved = this.store.find(TRACE_KEY);
    return saved.trace || {};
  }

  saveTrace(trace) {
    this.store.save({
      id: TRACE_KEY,
      trace,
    });
  }

  pushEvent(event) {
    const toSaveEvent = Object.assign(
      event,
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
}

export default TWA;

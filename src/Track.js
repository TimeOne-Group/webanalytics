import { AppError, Severity } from '@timeone-group/error-logger-js';
import TWA from './TWA';
import defaultConfig from './defaultConfig';

const cache = {};
const debugConf = {};

const buildFinalConfig = (config) => {
  if (!config) {
    return defaultConfig;
  }

  const filteredDefaultConfig = defaultConfig.filter(
    (conf) =>
      config.filter((newConf) => newConf.field === conf.field).length === 0
  );

  return [...filteredDefaultConfig, ...config];
};

const checkIfExist = (twaId) => {
  if (!cache[twaId]) {
    throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
  }
};

const showDebug = (debug, object) => {
  if (debug && debug.active) {
    document.getElementById(debug.element).value = JSON.stringify(
      object,
      null,
      2
    );
  }
};

const Track = {
  init: ({ twaId, collect: config, env, debug }) => {
    if (!twaId) {
      throw new AppError(Severity.ERROR, 'Config must contain twaId');
    }
    cache[twaId] = new TWA(twaId, buildFinalConfig(config));
    if (env) {
      cache[twaId].setEnv(env);
    }
    if (debug && debug.active) {
      debugConf[twaId] = {
        active: true,
        element: debug.element || 'debug',
      };
    }
  },
  optin: ({ twaId }) => {
    checkIfExist(twaId);
    cache[twaId].setConsentStatus('optin');
  },
  exempt: ({ twaId }) => {
    checkIfExist(twaId);
    cache[twaId].setConsentStatus('exempt');
  },
  optout: ({ twaId }) => {
    checkIfExist(twaId);
    cache[twaId].setConsentStatus('optout');
  },
  showConfig: ({ twaId }) => {
    checkIfExist(twaId);
    showDebug(debugConf[twaId], cache[twaId].getConfig());
  },
  showTrace: ({ twaId }) => {
    checkIfExist(twaId);
    showDebug(debugConf[twaId], cache[twaId].getSavedTrace());
  },
  showConsentStatus: ({ twaId }) => {
    checkIfExist(twaId);
    showDebug(debugConf[twaId], cache[twaId].getConsentStatus());
  },
  clearAll: ({ twaId }) => {
    checkIfExist(twaId);
    cache[twaId].clearAll();
  },
  pageview: ({ twaId }) => {
    checkIfExist(twaId);
    showDebug(debugConf[twaId], cache[twaId].pushEvent({ type: 'pageview' }));
  },
  lead: ({ twaId, convId, convDatas }) => {
    checkIfExist(twaId);
    showDebug(
      debugConf[twaId],
      cache[twaId].pushEvent({ type: 'lead', convId, convDatas })
    );
  },
  sale: ({ twaId, convId, convDatas, convTurnover, convCurrency }) => {
    checkIfExist(twaId);
    showDebug(
      debugConf[twaId],
      cache[twaId].pushEvent({
        type: 'sale',
        convId,
        convDatas,
        convTurnover,
        convCurrency,
      })
    );
  },
};

export default Track;

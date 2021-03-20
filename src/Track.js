/* eslint-disable no-console */
import { AppError, Severity } from '@timeone-group/error-logger-js';
import TWA from './TWA';
import defaultConfig from './defaultConfig';

const cache = {};

const checkIfExist = (twaId) => {
  if (!cache[twaId]) {
    throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
  }
};

const Track = {
  init: ({ twaId, collect: config }) => {
    if (!twaId) {
      throw new AppError(Severity.ERROR, 'Config must contain twaId');
    }
    cache[twaId] = new TWA(twaId, [...defaultConfig, ...config]);
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
    console.log(cache[twaId].getConfig());
  },
  showTrace: ({ twaId }) => {
    checkIfExist(twaId);
    console.log(cache[twaId].getSavedTrace());
  },
  showConsentStatus: ({ twaId }) => {
    checkIfExist(twaId);
    console.log(cache[twaId].getConsentStatus());
  },
  clearAll: ({ twaId }) => {
    checkIfExist(twaId);
    cache[twaId].clearAll();
  },
  pageview: ({ twaId }) => {
    checkIfExist(twaId);
    cache[twaId].pushEvent({ type: 'pageview' });
  },
};

export default Track;

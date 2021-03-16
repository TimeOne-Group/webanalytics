/* eslint-disable no-console */
import { AppError, Severity } from '@timeone-group/error-logger-js';
import TWA from './TWA';
import defaultConfig from './defaultConfig';

const cache = {};

const Track = {
  init: ({ twaId, collect: config }) => {
    if (!twaId) {
      throw new AppError(Severity.ERROR, 'Config must contain twaId');
    }
    cache[twaId] = new TWA(twaId, [...defaultConfig, ...config]);
  },
  showConfig: ({ twaId }) => {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
    }

    console.log(cache[twaId].getConfig());
  },
  showTrace: ({ twaId }) => {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
    }

    console.log(cache[twaId].getSavedTrace());
  },
  clearAll: ({ twaId }) => {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
    }

    cache[twaId].clearAll();
  },
  pageview: ({ twaId }) => {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
    }

    cache[twaId].pushEvent({ type: 'pageview' });
  },
};

export default Track;

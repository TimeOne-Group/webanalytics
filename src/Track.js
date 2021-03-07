import { AppError, Severity } from '@timeone-group/error-logger-js';
import TWA from './TWA';

const cache = {};

const Track = {
  init: ({ twaId, collect }) => {
    if (!twaId) {
      throw new AppError(Severity.ERROR, 'Config must contain twaId');
    }
    cache[twaId] = new TWA(twaId, collect);
  },
  show: ({ twaId }) => {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
    }

    cache[twaId].show();
  },
  showAllEvents: ({ twaId }) => {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
    }

    cache[twaId].showAllEvents();
  },
  pageview: ({ twaId }) => {
    if (!cache[twaId]) {
      throw new AppError(Severity.ERROR, `twaId ${twaId} not configured`);
    }

    cache[twaId].pushEvent({ type: 'pageview' });
  },
};

export default Track;

import { Logger, AppError, Severity } from '@timeone-group/error-logger-js';
import Proxy from './Proxy';

const WINDOW_VARNAME = 'TWA';

try {
  if (typeof window[WINDOW_VARNAME] === 'undefined') {
    window[WINDOW_VARNAME] = new Proxy();
  } else if (
    typeof window[WINDOW_VARNAME] === 'object' &&
    Array.isArray(window[WINDOW_VARNAME])
  ) {
    const proxyTmp = new Proxy();
    window[WINDOW_VARNAME].forEach((args) => proxyTmp.push(args));
    window[WINDOW_VARNAME] = proxyTmp;
  } else if (
    typeof window[WINDOW_VARNAME] === 'object' &&
    window[WINDOW_VARNAME] instanceof Proxy
  ) {
    // Nothing
  } else {
    throw new AppError(Severity.ERROR, 'Unknown type');
  }
} catch (e) {
  Logger.catchError(e, 'TWA - Tracker');
}

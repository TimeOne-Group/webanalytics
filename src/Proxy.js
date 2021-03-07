import { AppError, Severity, Logger } from '@timeone-group/error-logger-js';
import Track from './Track';

class Proxy {
  // eslint-disable-next-line class-methods-use-this
  push(args) {
    let result;
    try {
      const [functionName, ...functionArgs] = args;
      if (typeof Track[functionName] !== 'function') {
        throw new AppError(
          Severity.ERROR,
          `Undefined function ${functionName}`
        );
      }

      result = Track[functionName].apply(null, functionArgs);
    } catch (e) {
      Logger.catchError(e);
    }

    return result;
  }
}

export default Proxy;

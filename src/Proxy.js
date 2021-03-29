import { AppError, Severity } from '@timeone-group/error-logger-js';
import Track from './Track';

class Proxy {
  // eslint-disable-next-line class-methods-use-this
  push(args) {
    const [functionName, ...functionArgs] = args;
    if (typeof Track[functionName] !== 'function') {
      throw new AppError(Severity.ERROR, `Undefined function ${functionName}`);
    }

    return Track[functionName].apply(null, functionArgs);
  }
}

export default Proxy;

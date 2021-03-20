import Cookies from 'js-cookie';
import Global from './Global';

class ConsentStatus {
  constructor(twaId) {
    this.twaId = twaId;
  }

  set(status) {
    Cookies.set(this.getKey(), status, {
      expires: Global.CONSENT_STORAGE_DEFAULT_TTL,
      sameSite: 'strict',
    });
  }

  get() {
    return Cookies.get(this.getKey());
  }

  getKey() {
    return `${Global.STORAGE_PREFIX}_${Global.CONSENT_KEY}_${this.twaId}`;
  }
}

export default ConsentStatus;

import 'core-js/es/object/assign';
import 'core-js/es/array/includes';
import StorageJS from '@timeone-group/storage-js';
import { v4 as uuid } from '@lukeed/uuid';
import QueryString from 'query-string';

class TWA {
  constructor(id, collect) {
    this.id = id;
    this.collect = collect;
    this.store = new StorageJS({ prefix: 'TWA', defaultTTL: 34164000 });
  }

  show() {
    // eslint-disable-next-line no-console
    console.log(this.collect);
  }

  pushEvent(event) {
    const parsedQueryString = QueryString.parse(window.location.search);
    const collected = this.collect
      .map((toCollect) => ({
        name: toCollect.field,
        value: parsedQueryString[toCollect.param] || null,
      }))
      .filter((param) => param.value !== null);
    const addToEvent = {};
    collected.forEach((toCollect) => {
      addToEvent[toCollect.name] = toCollect.value;
    });
    const id = uuid();
    this.store.save({
      id,
      event: Object.assign(event, addToEvent),
    });
  }

  getAllEvents() {
    return this.store.findAll();
  }

  showAllEvents() {
    // eslint-disable-next-line no-console
    console.log(this.getAllEvents());
  }
}

export default TWA;

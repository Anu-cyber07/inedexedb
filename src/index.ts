import { set,get } from 'idb-keyval';
set('hello', 'world')
  .then(() => console.log('It worked!'))
  .catch((err) => console.log('It failed!', err));
  get('hello').then((val) => console.log(val));
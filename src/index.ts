import { get, set } from 'idb-keyval';

set('incidents', [{x: 1}, {y: 2}]);
set('name',"anuprabha");

get('incidents').then(console.log)
get('name').then(console.log)
import { curry } from 'ramda';

const trace = curry((s, x) => {
  console.log(s);
  return x;
});

export { trace };

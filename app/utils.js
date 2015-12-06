import { curry } from 'ramda';

const url = (term) => {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' +
    term + '&format=json&jsoncallback=?';
};

const trace = curry((s, x) => {
  console.log(s, x);
  return x;
});

export {
  url,
  trace,
};

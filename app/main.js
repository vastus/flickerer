import $ from 'jquery';
import {
  compose,
  curry,
  map,
  prop,
} from 'ramda';

import {
  url,
  trace,
} from './utils';

const Impure = function ({ $, curry }) {
  const getJSON = curry((callback, url) => {
    $.getJSON(url, callback);
  });

  const setHTML = curry((selector, html) => {
    $(selector).html(html);
  });

  return {
    getJSON,
    setHTML,
  };
}({ $, curry });


// mediaURL :: Object -> Prop
const mediaURL = compose(prop('m'), prop('media'));

// srcs :: Object -> [mediaURL]
const srcs = compose(map(mediaURL), prop('items'));

// img :: URL -> <img src=url />
const img = (url) => $('<img />', { src: url });

// images
const images = compose(map(img), srcs);

// renderImages
const renderImages = compose(Impure.setHTML('body'), images);

// app
const app = compose(Impure.getJSON(renderImages), url);

app('cats');

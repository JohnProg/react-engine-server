'use strict';

var client = require('react-engine/lib/client');

require('./views/**/*.jsx', {glob: true});

var options = {
  viewResolver: function(viewName){
    return require('./views/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {

  // `onBoot` - Function (optional)
  // returns data that was used
  // during rendering as the first argument
  // the second argument is the `history` object that was created behind the scenes
  // (only available while using react-router)
  client.boot(options);
});

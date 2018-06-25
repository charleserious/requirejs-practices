require.config({
  paths: {
    foo: 'libs/foo',
    jquery: 'https://code.jquery.com/jquery-3.3.1.min'
  },
  callback: function () {
    console.log(arguments)
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

require(['foo', 'jquery'], function(foo, $) {
  console.log($);
});
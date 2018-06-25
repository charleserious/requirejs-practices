require.config({
  paths: {
    foo: 'libs/foo',
    inventory: 'libs/inventory',
    cart: 'libs/cart',
    shirt: 'libs/shirt'
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

require([
  'foo',
  'inventory',
  'cart',
  'shirt'
], function(foo, inventory, cart, shirt) {
  shirt.addToCart();
})
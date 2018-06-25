define([
  'foo',
  'cart',
  'inventory'
], function(foo, cart, inventory) {
  'use strict';
  return {
    color: foo.color,
    size: foo.size,
    addToCart: function () {
      inventory.decrement(this);
      cart.add(this);
    }
  }
});
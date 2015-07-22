/* global module */
'use strict';
/*
 * Run the tests by typing 'make' on the command line.
 * You are not allowed to use any non-native libraries.
 */


/**
 * LimitList
 *
 * A LimitList only allows a limited number of items in the list.
 * Once the limit is reached, older items will be removed from the list
 * as new items are added.
 * First in, First out. Also known as FIFO
 *
 * You may not use libraries.
 */
function LimitList(limit) {
}
LimitList.prototype = {
  add: function() {}
  , at: function() {}
  , length: function() {}
};
module.exports = LimitList;

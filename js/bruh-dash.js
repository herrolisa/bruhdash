var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(arr, num){
      var newArr = [];
      for (var i = 0; i < arr.length; i+=num) {
        newArr.push(arr.slice(i, i + num));
      }
      return newArr;
  },

  compact: function() {

  },

  difference: function() {

  },

  drop: function(){

  },

  dropRight: function() {

  },

  fill: function() {

  },

  first: function () {

  },

  indexOf: function () {

  },

  inital: function () {

  },

  last: function () {

  },

  lastIndexof: function () {

  },

  pull: function () {

  },

  pullAt: function () {

  },

  rest: function () {

  },

  slice: function () {

  },

  take: function () {

  },

  takeRight: function () {

  },

  zip: function () {

  },

  unzip: function () {

  },

  without: function() {

  }
};
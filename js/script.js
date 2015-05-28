"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var toDecimal = function(number, base) {
  var tempStringArray = number.toString().split("").reverse();
  var numberArray = tempStringArray.map(function(num) { return parseInt(num); });
  var result = 0;
  for (var i = 0; i < numberArray.length; i++) {
    var power = Math.pow(base, i);
    result = result + power * numberArray[i];
  }

  return result;
};

// var toDecimalFromTrinary = function(trinaryNumber) {
//   var tempStringArray = trinaryNumber.toString().split("").reverse();
//   var numberArray = tempStringArray.map(function(num) { return parseInt(num); });
//   var result = 0;
//   for (var i = 0; i < numberArray.length; i++) {
//     var power = Math.pow(3, i);
//     result = result + power * numberArray[i];
//   }
//
//   return result;
// };

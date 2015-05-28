"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var toDecimal = function(number, base) {
  var numberArray = number.toString().toLowerCase().split("").reverse();
  var result = 0;

  var numberMap = new Object();

  var letter = "a";
  for (var i = 0; i < 36; i++) {
    if (i < 10) {
      numberMap[i] = i;
    } else {
      numberMap[letter] = i;
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
  };

  if (base === 16) {
    result = parseInt(number);
  } else {
    for (var i = 0; i < numberArray.length; i++) {
      var power = Math.pow(base, i);
      result = result + power * numberMap[numberArray[i]];
    }
  }

  return result;
};

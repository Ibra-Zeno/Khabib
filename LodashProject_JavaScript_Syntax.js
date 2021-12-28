//@ts-check
const _ = {
    // forces a number between boundaries
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    // Checks if a number is within range
    inRange(number, start, end) {
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      } if (start > end) {
        [start, end] = [end, start]
      }
      let isInRange = (start <= number && number < end)? true : false;
      return isInRange;
    },
    // turns string into an array of words
    words(string) {
      let words = string.split(' ');
      return words;
    },
    // Adds space characters to string to meet length
    pad(string, length){
      if (string.length > length) {
        return string;
      }
      let startPaddingLength = Math.floor((length - string.length)/2);
      let endPaddingLength = (length - string.length - startPaddingLength);
      let paddedString = ' ';
      paddedString = paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
      return paddedString;
    },
    //Checks if an object has a key-value pair
    has(object, key) {
      // Bracket lets us access properties using a variable!
      let hasValue = (typeof object[key] !== 'undefined')? true : false;
      return hasValue;
    },
    invert(object) {
      let invertedObject = {};
      for (let property in object) {
        let originalValue = object[property];
        // It's safer to use bracket notation
        invertedObject[originalValue] = property;
      }
      return invertedObject;
    },
    findKey(object, predicate) {
      //Return truthy value from predicate function?
      for (const key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue == true) {
          return key;
        }
      }
      return undefined;
    },
    drop(array, n) {
      if (typeof n !== 'number') {
        n = 1;
      }
      let droppedArray = array.slice(n)
      return droppedArray;
    },
    dropWhile(array, predicate) {
      //Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey
      let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    let droppedArray = this.drop(array, dropNumber)
    return droppedArray;
    },
    chunk(array, size) {
      if (typeof size === 'undefined') {
        size = 1;
      }
      let arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    
    }
}
  console.log(_.clamp(52,43,49));
  console.log(_.inRange(54,34,65));

  
  
  
  
  

  
  
  
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
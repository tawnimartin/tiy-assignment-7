/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2) {

  //check if num1 is greater than num2
  if (num1 > num2) {
    return num1;//if so, return num1
  }
  //else num2 is greater (or equal to... but, either way..)
  else {
    return num2;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){

  //if num1 is greater than num2 AND greater than num3, then we know it's the max of three
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  //it's definitely not num1. So, same check on num2 with the other numbers.
  else if (num2 > num1 && num2 > num3) {
    return num2;
  }
  //it must be num3. Return num3.
  else {
    return num3;
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


function isVowel(char){

  var vowels;
  //put all the vowels in a string and split it into an array
  vowels = "AEIOU".split("");
  //loop through each element in the array and
  var newvowels = vowels.filter(function(item) {
    //perform this test - check if item in the array is the same as the provided char. toUpperCase to account for both lower and uppercase input.
    return item === char.toUpperCase();//if true, item will be added to the resulting array and ultimately returned, if false, it will not.
    });
    return !!(newvowels.length);//the array that is returned will either have 1 element(true), or none(false - or falsey as I have learned). 
    //!! coerces it to boolean. If it was falsey, it will convert it to false.
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numsToSum){

  //use reduce method on array provided to cycle through the elements and result in one thing
  var summedNums = numsToSum.reduce(function(result, num) {
    return result += num;//and add to memo (or result) the sum of the nums
  });
  return summedNums;//return sum
}


function multiply(numsToMultiply){

  //use reduce function on array provided to cycle through the elements and result in one thing
  var multipliedNums = numsToMultiply.reduce(function(result, num) {
    return result *= num;//and multiply nums and add to memo
  });
  return multipliedNums;//return result
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(strToReverse){

//create new array for output
var newArray = [];
//split provided array and put in new array for looping
var newStrArray = strToReverse.split("");
  //loop through, for each element in the array (or letter)..
  newStrArray.forEach(function(item, indexNum){
    //put into new empty array. Unshift will add new items to the beginning of the array, putting the letters in reverse order.
    newArray.unshift(item);
  });
  arr2 = newArray.join("");//join result

  return arr2;

}
//or you can use reverse() method on array.


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){

//set maxLength to 0 before the looping starts
var maxLength = 0;
//take our array of words and cycle through
 words.forEach(function(item) {
    //For each element or value, in this case the word, check if it's length is greater than the maxLength
    if (item.length > maxLength) {
        //if so, change maxLength to the the length of this current word
        maxLength = item.length;
    }
     //else, maxlength will not be changed.   
  });

 return maxLength;//return result
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  var varfiltered

  //cycle through provided words array..
  varfiltered = words.filter(function(item) {
    //check if the length of the element or word is greater than the i or integer provided
    return item.length > i;
  });
  //return the result, which would be an array of words that meet this condition
  return varfiltered;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){

  //take provided string and split to array
  var strArray = string.split("");
  //create empty object to store final result
  var objectFL = {};
  //set count to 1
  var count = 1;
  //loop through array and for each letter..
  strArray.forEach(function(item) {
    //check: if the object we created has the letter already..
    if (objectFL[item]) {
      //increment the value of that letter
      objectFL[item]++;
    //else
    } else {
      //this would be when there is no letter present, so it would be the first time the letter is added. Add letter to object, give it a value of 1 from count.
      objectFL[item] = count;
    }
  });
return objectFL;
}

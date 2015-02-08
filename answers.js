
//Question 1
//----------------

//this cycles through the objects and for each one it grabs the value of price. It returns an array of all the prices.
var prices = items.map(function(currentItem){

  return currentItem.price;

});
//take that result set and reduce it to one thing...
var sum = prices.reduce(function(memo, currentItem){

  return memo += currentItem; //..sum

}, 0);//memo starts as already having the first element in the array, instead we want it to start at 0

console.log("\nQUESTION 1:\n\nThe average price is: $" + (sum / prices.length).toFixed(2)); //and average, using length of prices array as total number of prices. toFixed(2) keeps it at 2 decimal points.




//Question 2
//----------------
//filter out only those objects that have prices that fall within the range 14 - 18
var inRange = items.filter(function(currentItem) {

  return currentItem.price > 14.00 && currentItem.price < 18.00;//grab objects that meet true for this range of values

});
//take the result set of the above and create an array of their titles by mapping to title
var titles = inRange.map(function(currentItem){

  return "title: " + currentItem.title + "\n";

});
//join titles to get rid of the commas
console.log("\nQUESTION 2:\n\nItems that cost between $14.00 USD and $18.00 USD:\n\n " + titles.join(" "))




//Question 3
//----------------
//Filter out object that has currency code of GBP
var getGbp = items.filter(function(currentItem){

  return currentItem.currency_code === "GBP"; 

});
//take the above and get the title
var GbpTitle = getGbp.map(function(currentItem){

  return currentItem.title

});
//get that original result set of GBP data and do the same to get the price
var GbpPrice = getGbp.map(function(currentItem){

  return currentItem.price

});

console.log("\nQUESTION 3:\n\n " + GbpTitle + " costs £" + GbpPrice + "\n\n" )




//Question 4
//----------------

//hasWoodCheck returns true or false for whether "wood" is present in materials array
var hasWoodCheck = function(allMaterials) {//grabs the array that has all the materials

  var woodtrueorfalse = false;//initially set as false, must be disproven

  allMaterials.forEach(function(currentItem) {//cycles through all materials to check for wood

    if(currentItem === "wood") {//if it's present, true
      woodtrueorfalse = true;
    }

  }); 

    return woodtrueorfalse//returns true or false
}

//the procedure starts here, by filtering out materials
var getMaterials = items.filter(function(currentItem) {

  //return currentItem.materials is what you would do to get all the objects with materials, of all kinds
  //instead of that, put it in variable for use in checking for wood

  var allMaterials = currentItem.materials//we'll call it allMaterials

  var woodMaterials = hasWoodCheck(allMaterials) //hasWoodCheck checks allMaterials for wood assigning true if so, & filter function will grab elements that meet true
  //that then goes into woodMaterials
  return woodMaterials//so this function returns filtered set of objects with materials that contain wood

});

//from our result set of objects that contain wood materials, lets get titles
var getTitles = getMaterials.map(function(currentItem) {

  return currentItem.title + " is made of wood. " + "\n";

});
//and print them out, join to remove commas
console.log("\nQUESTION 4:\n\n " + getTitles.join(" "))




//Question 5
//----------------
//up here for formatting
console.log("\nQUESTION 5:\n\n")

//similar to the above, grabs all materials
var hasEight = function(allMaterials) {

  var eighttrueorfalse = false;//set to false

  allMaterials.forEach(function(currentItem) {//cycles through all materials
          
    if(allMaterials.length >= 8) {//this time, we check for the length of the materials array, give it true if it's greater than or equal to 8
      eighttrueorfalse = true;
    }

  }); 

  return eighttrueorfalse//returns true or false
}

//the procedure starts here, by filtering out materials
var getMaterialsforeight = items.filter(function(currentItem) {

  //put all materials in a variable for checking
  var allMaterialsforeight = currentItem.materials
  //runs through hasEight function, will return true for those with 8 or up
  var eightMaterials = hasEight(allMaterialsforeight) 
  //and return our filtered result into eightMaterials
  return eightMaterials

});

//get titles from our result set of objects with the correct amount of materials
var getTitlesforeight = getMaterialsforeight.map(function(currentItem) {

  return currentItem.title + " has 9 materials: " + "\n\n";

});

//From this same set, get the arrays of materials
var materialsListforeight = getMaterialsforeight.map(function(currentItem) {

  return currentItem.materials;//and return

});

var i = 0; //i is counter.  Set to 0 to start

//for output, for each # of objects we have, print out the title and the list of materials
var forOutput = getMaterialsforeight.forEach(function(currentItem) {

  //for each pass, print the title and materials list, using i counter for array index. Joined to remove commas and give it line breaks.
  console.log(getTitlesforeight[i] + " " + materialsListforeight[i].join(" \n "));

  i++;//increment counter

});
//Probably a better way to do this, but no magic numbered indexes at least




//Question 6
//----------------
//filter out objects 
var getWhoMade = items.filter(function(currentItem) {

  //with who_made, having "i_did"
  return currentItem.who_made === "i_did";

});
//and print the length of the resulting array
console.log("\nQUESTION 6:\n\n " + getWhoMade.length + " were made by their sellers.")



















const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");

planets.forEach(function (item) {
    planetEl.innerHTML += `<div>${item}</div>`;
});



/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

    planets.map(function(planet) {
    var PlanetVar = planet.charAt(0).toUpperCase() + planet.slice(1);
    planetEl.innerHTML += `<div>${PlanetVar}</div>`;
  });




/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

  let PlanetVar = planets.filter(planet => planet.includes("e"));
  planetEl.innerHTML += `<div>${PlanetVar}</div>`;



// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let birdSentence = words.reduce((word,index) => word + " " + index);
planetEl.innerHTML += `<div>${birdSentence}</div>`;
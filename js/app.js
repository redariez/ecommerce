

//create objects using constructor notation
function animal(species, diet, habitat, image) {
  this.species = species;
  this.diet = diet;
  this.habitat = habitat;
  this.image = image;
}
//create new products using product constructor
var wolf = new animal("mammal", "carnivore", "woodlands", "img/wolf.jpg");
var shark = new animal("fish", "carnivore", "coastal waters", "img/shark.jpg");
var wasp = new animal("insecta", "omnivore", "meadows", "img/wasp.jpg");
var anaconda = new animal("reptilia", "carnivore", "swamps", "img/anaconda.jpg");

//Create an array to add products
var animalArray = new Array

//add products to array of products
animalArray.push(wolf,shark,wasp,anaconda)

//loop through products Array
for(var i = 0; i < animalArray.length; i++) {
  //create new elements for each organism
  var newItem   = document.createElement("div")
  var newDiv    = document.createElement("div")
  var newH1     = document.createElement("h1")
  var speciesH4 = document.createElement("h4")
  var dietH4    = document.createElement("h4")
  var habitatH4 = document.createElement("h4")
  var image     = document.createElement("img")


//Create text for new Elements
var aSpecies = document.createTextNode("SPECIES: " + animalArray[i].species)
var aDiet = document.createTextNode("Eating lifestyle is a " + animalArray[i].diet)
var ahabitat = document.createTextNode("lives in " + animalArray[i].habitat)



//image
image.src = animalArray[i].image

// update class attributes
	image.className = "img-responsive"
	newItem.className = "col-sm-4"


  // add text to elements
	speciesH4.appendChild(aSpecies)
	dietH4.appendChild(aDiet)
  habitatH4.appendChild(aHabitat)



  // add elements to new div
	newDiv.appendChild(image)
	newDiv.appendChild(speciesH4)
	newDiv.appendChild(dietH4)
  newDiv.appendChild(habitatH4)


  // add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="organism"
	document.getElementById("organism").appendChild(newItem)
}

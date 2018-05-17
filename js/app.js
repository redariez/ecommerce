//object literal notation
var wolf = {
  kingdom:"animalia",
  species:"mammal",
  diet:"carnivore",
  habitat:"woodlands",
  image:"img/wolf.jpg"
}
var shark = {
  kingdom:"animalia",
  species:"fish",
  diet:"carnivore",
  habitat:"coastal waters",
  image:"img/shark.jpg"
}
var wasp = {
  kingdom:"animalia",
  species:"insecta",
  diet:"omnivore",
  habitat:"meadows",
  image:"img/wasp.jpg"
}
var anaconda = {
  kingdom:"animalia",
  species:"reptilia",
  diet:"carnivore",
  habitat:"swamps",
  image:"img/anaconda.jpg"
}

console.log(wolf,shark,wasp,anaconda);

//create objects using constructor notation
function animal(kingdom, species, diet, habitat, image) {
  this.kingdom = kingdom;
  this.species = species;
  this.diet = diet;
  this.habitat = habitat;
  this.image = image;
}

//create new products using product constructor
var wolf = new animal("animalia", "mammal", "carnivore", "woodlands", "img/wolf.jpg");
var shark = new animal("animalia", "fish", "carnivore", "coastal waters", "img/shark.jpg");
var wasp = new animal("animalia", "insecta", "omnivore", "meadows", "img/wasp.jpg");
var anaconda = new animal("animalia", "reptilia", "carnivore", "swamps", "img/anaconda.jpg");

//Create an array to add products
var animalArray = new Array

//add products to array of products
animalArray.push(wolf,shark,wasp,anaconda)

//loop through products Array
for(var i = 0; i < animalArray.length; i++) {
  //create new elements for each products
  var newItem = document.createElement("div")
  var newDiv = document.createElement("div")
  var newH1 = document.createElement("h1")
  var habaitatPara = document.createElement("p")
  var kingdomH4 = document.createElement("h4")
  var speciesH4 = document.createElement("h4")
  var dietH4 = document.createElement("h4")
  var image = document.createElement("img")
}

//Create text for new Elements
var aKingdom = document.createTextNode("This is a " + animalArray[i].kingdom)
var aSpecies = document.createTextNode("This animal is a " + animalArray[i].species)
var aDiet = document.createTextNode("Eating lifestyle is a " + animalArray[i].diet)
var ahabitat = document.createTextNode("these top predators run thier territory " + animalArray[i].habitat)

//image
img.src = animalArray[i].image

// update class attributes
	image.className = "img-responsive"
	newItem.className = "col-sm-4"


  // add text to elements
	kingdomH4.appendChild(aKingdom)
	speciesH4.appendChild(aSpecies)
	dietH4.appendChild(aDiet)
	habaitatPara.appendChild(aHabitat)

  //add elements to new Div
  // add elements to new div
	newDiv.appendChild(kingdomH4)
	newDiv.appendChild(image)
	newDiv.appendChild(speciesH4)
	newDiv.appendChild(dietH4)
	newDiv.appendChild(habaitatPara)

  // add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}

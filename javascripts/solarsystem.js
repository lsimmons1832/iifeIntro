var SolarSystem = (function(){
	var planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"];
	var dwarfPlanets = ["Pluto"];
	var numPlanetsPeopleLandedOn = 0;
	
	var stars = ["Sun","Alpha Centauri","Wolf 359"];
	var age = 0;

	return{
		getPlanets: function(){
			return planets;
		},
		getPlantesLandedPeopleOn: function(){
			return numPlanetsPeopleLandedOn;
		},
		setPlanetsLandedPeopleOn: function(){
			numPlanetsPeopleLandedOn++;
		},

		getDwarfPlanets: function(){
			return "they are rejects";
		},
		setDwarfPlanets: function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		getStars: function(){
			return stars;
		},
		setStars: function(){
			stars.push(newStar);
		},
		getSolarSystemAge: function(){
			return age;
		},
		setSolarSystemAge: function(){
			age++;
		}
	}

})();

// console.log("Planets: ", SolarSystem.getPlanets());
// console.log("Planets with people: ", SolarSystem.getPlantesLandedPeopleOn());
// SolarSystem.setSpaceShips("Voyager 1");
// SolarSystem.setSpaceShips("Voyager 2");
// SolarSystem.setSpaceShips("Gemini");
// SolarSystem.setSpaceShips("Apollo");
// console.log("Where's my aircraft? ", SolarSystem.getSpaceShips());
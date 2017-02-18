var SolarSystem = (function (oldSolarSystem) {
	var spaceships = [];

	oldSolarSystem.getSpaceShips = function(){
			return spaceships;
		},
	oldSolarSystem.setSpaceShips = function(newSpaceShip){
			spaceships.push(newSpaceShip);
		},
	oldSolarSystem.wreckedSpaceShips = function(){
			spaceships.pop();
		}

	return oldSolarSystem;
})(SolarSystem || {}); //augment old solar system or an empty object 
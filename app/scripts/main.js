

angular.module('cityApp', ['cityApp.controllers', 'cityApp.factories', 'ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/add-city', {
        templateUrl: 'views/add-city.html',
        controller: 'AddCityController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

/*
	This is a Factory, it is an unique element (Singleton), that lives across the application.
	This is a great feature because you can read, share, use and update this information from different controllers
	by just injecting the Factory name into the controller dependencies.
*/
angular.module('cityApp.factories', [])
.factory('cityFactory', function($http){
	
	//-- In this case, we are going to store our cities list into a variable within the Factory 
	/*
	var cities = [
		{"name": "Amsterdam", "country": "Netherlands"},
		{"name": "Eindhoven", "country": "Netherlands"},
		{"name": "The Haage", "country": "Netherlands"},
		{"name": "Brussels", "country": "Belgium"},
		{"name": "Brugge", "country": "Belgium"},
		{"name": "Hamburg", "country": "Germany"},
		{"name": "Düsseldorf", "country": "Germany"},
		{"name": "Köln", "country": "Germany"},
		{"name": "Venice", "country": "Italy"},
		{"name": "Firenze", "country": "Italy"},
		{"name": "Milano", "country": "Italy"},
		{"name": "Paris", "country": "France"},
		{"name": "San Francisco", "country": "US"},
		{"name": "Dallas", "country": "US"},
		{"name": "Miami", "country": "US"},
		{"name": "Los Angeles", "country": "US"},
		{"name": "New York", "country": "US"},
		{"name": "Brisbane", "country": "Australia"},
		{"name": "Sydney", "country": "Australia"},
	];
	*/

	/*Every Factory needs to return an object with the methods/functions that are going to be accesible from the controller where the Factory is injected.*/
	return {
		/*Each object property is a function, in this case getAll will return the cities array.*/
		getAll: function(callback){
			$http.get('json/cities.json').success(callback);
		},

		/*AddCity will receive 2 parameters and add a new city-country into the array*/
		addCity: function(_city, _country){
			cities.push({'name': _city, 'country': _country});
		}
	}
});


angular.module('cityApp.controllers', [])
//-- Notice that 'cityFactory' is being injected as dependency
.controller('MainController', ['$scope', 'cityFactory', '$http', function($scope, cityFactory, $http){
	
	//-- Now we can just call the getAll function in the cityFactory, and ask for the data in the callback
	cityFactory.getAll(function(data){
		$scope.cities = data;
	});
}])

//-- Notice that 'cityFactory' is being injected as dependency
.controller('AddCityController', ['$scope', 'cityFactory',  function($scope, cityFactory){
	
	//--Now we can just use the addCity function that is defined into the Factory
	$scope.addCity = function(_city, _country){
		cityFactory.addCity(_city, _country);
		$scope.cityToAdd = "";
		$scope.countryToAdd = "";
	};

	//--This is how the function was working before using factories.
	/*
	$scope.addCity = function(_city, _country){
		$scope.cities.push({'name': _city, 'country': _country});
		$scope.cityToAdd = "";
		$scope.countryToAdd = "";
	};
	*/
}]);
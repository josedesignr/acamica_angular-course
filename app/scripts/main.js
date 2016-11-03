

angular.module('cityApp', ['cityApp.controllers', 'ngRoute'])

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


angular.module('cityApp.controllers', [])
.controller('MainController', ['$scope', function($scope){
	
	$scope.cities = [
		{'name': 'Amsterdam', 'country': 'Netherlands'},
		{'name': 'Eindhoven', 'country': 'Netherlands'},
		{'name': 'The Haage', 'country': 'Netherlands'},
		{'name': 'Brussels', 'country': 'Belgium'},
		{'name': 'Brugge', 'country': 'Belgium'},
		{'name': 'Hamburg', 'country': 'Germany'},
		{'name': 'Düsseldorf', 'country': 'Germany'},
		{'name': 'Köln', 'country': 'Germany'},
		{'name': 'Venice', 'country': 'Italy'},
		{'name': 'Firenze', 'country': 'Italy'},
		{'name': 'Milano', 'country': 'Italy'},
		{'name': 'Paris', 'country': 'France'},
		{'name': 'San Francisco', 'country': 'US'},
		{'name': 'Dallas', 'country': 'US'},
		{'name': 'Miami', 'country': 'US'},
		{'name': 'Los Angeles', 'country': 'US'},
		{'name': 'New York', 'country': 'US'},
		{'name': 'Brisbane', 'country': 'Australia'},
		{'name': 'Sydney', 'country': 'Australia'},
		{'name': 'Melbourne', 'country': 'Australia'},
		{'name': 'Gold Coast', 'country': 'Australia'}
	];

}])

.controller('AddCityController', ['$scope', function($scope){
	
	$scope.addCity = function(_city, _country){
		$scope.cities.push({'name': _city, 'country': _country});
		$scope.cityToAdd = "";
		$scope.countryToAdd = "";
	};
}]);
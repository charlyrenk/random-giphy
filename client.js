var app = angular.module('myApp', []);

app.controller('SwapiController', ['$http', function($http) {
    console.log('controller loaded');

    var self = this;

    self.getSpecies = function(id) {

        $http.get('https://swapi.co/api/species/' + id).then(function (response) {
            console.log('response.data ', response.data);
            self.speciesResult = response.data;

            $http.get(self.speciesResult.films[0]).then(function (response) {
                console.log('film data: ', response.data);

                self.filmResult = response.data;
            });
        });
    }

    
}]);

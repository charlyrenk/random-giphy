var app = angular.module('myApp', []);

app.controller('SwapiController', ['$http', function($http) {
    console.log('controller loaded');

    var self = this;
    var giphyAPIKey = '618f921ed0544d0289c3d79e87a4a365';   // your API Key

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

    self.getTrendingGiphy = function() {
        // example request:
        // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += 'api_key=' + giphyAPIKey;    // api key
        baseUrl += '&limit=5';  // limit
        baseUrl += '&rating=g'; // rating

        console.log('baseUrl: ', baseUrl);
        
        $http.get(baseUrl).then(function(response) {
            console.log('random giphys ', response.data);
            self.giphyResult = response.data;
        });
    };

    // self.getTrendingGiphy();
    self.searchGiphy = function(search) {
        // example request:
        // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
        var baseUrl = 'http://api.giphy.com/v1/gifs/search?q=' + search;
        baseUrl += '&api_key=' + giphyAPIKey;    // api key
        baseUrl += '&limit=5';  // limit
        baseUrl += '&rating=g'; // rating

        console.log('baseUrl: ', baseUrl);
        
        $http.get(baseUrl).then(function(response) {
            console.log('searched giphys ', response.data);
            self.giphyResult = response.data;
        });
    };
    
}]);

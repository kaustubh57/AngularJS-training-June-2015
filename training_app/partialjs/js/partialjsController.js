(function() {
'use strict';


//angular.module('demand', [])
angular.module('partialjs')
// partialjs controller
.controller('PartialjsController', ['$scope', function(scope) {

    // define partialjs scope function
    scope.loadPartialjsAngularFunction = function() {
        alert('Angular function is bind to the scope...');
    };

}]);
})();
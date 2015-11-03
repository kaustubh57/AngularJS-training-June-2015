(function() {
'use strict';

angular.module('dollarScope')
// dollarScope controller
.controller('DollarScopeController', ['$scope', '$rootScope',  function(scope, rootScope) {

        rootScope.$on('updateActiveUsers', function(){
            console.log('scope.$on >>> updateActiveUsers');
        });

        scope.scopeButtonClicked = function(){
            rootScope.$emit('updateActiveUsers');
        };

}]);

})();
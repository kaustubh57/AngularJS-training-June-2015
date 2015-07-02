(function() {
'use strict';

angular.module('ebook')
.service('EbookService', ['$http', function (http) {
    return {
        get: function(searchText) {
        	// Load ebook data from api
		    return http.get('http://it-ebooks-api.info/v1/search/'+searchText);
		}
    }
}]);
})();
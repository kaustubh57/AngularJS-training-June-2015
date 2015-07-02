(function() {
'use strict';

angular.module('ebook')
// ebook controller
.controller('EbookController', ['$scope', 'EbookService', function(scope, EbookService) {

	// define ebook scope objects
	scope.ebookList = [];
	scope.ebook = {};

	// Book Grid options object
    scope.ebookGridList = {
        data: 'ebookList',
        headerRowHeight: 30,
        rowHeight: 50,
        columnDefs: [
            { field: 'ID', displayName: 'ID'},
            { field: 'Title', displayName: 'Title'},
            { field: 'SubTitle', displayName: 'SubTitle'},
            { field: 'Description', displayName: 'Description'},
            { field: 'Image', displayName: 'Image', 
              cellTemplate:'ebook/view/template/imageCellTemplate.html'},
            { field: 'isbn', displayName: 'ISBN'}
        ]
    };

    scope.searchBook = function() {
       var promise = EbookService.get(scope.ebook.searchBookName);
        promise.success(function(data) {
            scope.ebookList = data.Books;
        });
        promise.error(function(data) {
            console.log('error while getting book list...');
        });
    };
}]);

})();
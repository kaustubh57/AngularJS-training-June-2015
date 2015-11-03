var utils = angular.module('Utilities',[]);

utils.filter('AgeFilter', function () {
    return function(data) {
        console.log("Age Filter data is " + data);
        return data + ' years';
    }
})

.filter('ellipsis', ['$filter', function (filter) {
    return function(data, length) {
        if (!length)
            length = 4;
        return filter('limitTo')(data, length) + '...';
    }
}])
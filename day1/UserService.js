var dataService = angular.module('DataService',[]);

dataService.service('UserService', ['$http', function (http) {
    return {
        save: function(userForm) {
            return http({
                url: userForm.fname+'.json',
                method: 'put',
                data: userForm,
                headers: {
                    //token: '',
                    location: 'PUNE'
                }
            });
        },

        delete: function(userFname) {
            return http({
                url: userFname+'.json',
                method: 'delete',
                headers: {
                    //token: '',
                    location: 'PUNE'
                }
            })
        }
    }
}]);
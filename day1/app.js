var login = angular.module('Login',['DataService', 'Utilities', 'ngGrid']);

login.controller('Login.LoginController', ['$scope', '$http', 'UserService', function (scope, http, UserService) {
    scope.users = [];

    // Grid options object
    scope.gridOpts = {
        data: 'users'
    };

    scope.gendersI18N = [
        {key: 'm',label: 'Male'},
        {key: 'f',label: 'Female'}
    ];

    scope.skillSet = [
        {key:'angular', label:'AngularJS'},
        {key:'jquery', label:'JQuery'},
        {key:'dojo', label:'DOJO'},
        {key:'db', label:'DB expert'},
        {key:'bogus', label:'BOGUS'}
    ];

    // Load data from json file
    http.get('countries.json').then(function(response){
        scope.countries = angular.fromJson(response.data.countries);
    },
    function(){

    });

    // hard coded data
    // scope.countries = [
    //     {key:'IN', label:'India'},
    //     {key:'PAK', label:'Pakistan'},
    //     {key:'NP', label:'Nepal'},
    //     {key:'BAN', label:'Bangladesh'}
    // ];

    scope.getGenderLabel = function(genderValue) {
        //WITH ANGULAR FOR-EACH
        //var genderLabel = 'NOT DEFINED';
        //angular.forEach(scope.gendersI18N, function(gender) {
        //    if (gender.key === genderValue) {
        //        genderLabel = gender.label;
        //    }
        //});
        //return genderLabel;


        // WITH FOR LOOP
        for (var genderIndex in scope.gendersI18N) {
            var gender = scope.gendersI18N[genderIndex];
            if (gender.key === genderValue) {
                return gender.label;
            }
        }
        return 'NOT DEFINED';
    };

    scope.getSkillLabel = function(skillValues) {
        //WITH ANGULAR FOR-EACH
        var skillString = '';
        angular.forEach(scope.skillSet, function(skill, skillIndex) {
            angular.forEach(skillValues, function(skillValue) {
                if (skill.key === skillValue) {
                    if (skillIndex!==0 && skillString!=='') {
                        skillString = skillString+', ';
                    }
                    skillString = skillString+skill.label;
                }
            });
        });
        return skillString;


        // WITH FOR LOOP
        //var skillString = '';
        //for (var skillIndex in scope.skillSet) {
        //    var skill = scope.skillSet[skillIndex];
        //    for (var selectedSkillIndex in skillValues) {
        //        if (skill.key === skillValues[selectedSkillIndex]) {
        //            if (skillIndex!==0 && skillString!=='') {
        //                skillString = skillString+', ';
        //            }
        //            skillString = skillString+skill.label;
        //        }
        //    }
        //}
        //return skillString;
    };

    scope.getCountryLabel = function(countryValue) {
        //WITH ANGULAR FOR-EACH
        var countryLabel = 'NOT DEFINED';
        angular.forEach(scope.countries, function(country) {
            if (country.key === countryValue.key) {
                countryLabel = country.label;
            }
        });
        return countryLabel;
    };

    scope.saveUser = function() {
        // METHOD 1: Use of http methods directly
        // var promise = http.put('data.json', scope.userForm);

        // METHOD 2: Use of http method with parametrized JSON data
        //var promise = http({
        //    url: 'data.json',
        //    method: 'put',
        //    data: scope.userForm,
        //    headers: {
        //        //token: '',
        //        location: 'PUNE'
        //    }
        //});

        // METHOD 3: Use of service
        var promise = UserService.save(scope.userForm);
        promise.success(function(data) {
            scope.users.push(angular.copy(scope.userForm));
            scope.userForm = {};
        });
        promise.error(function(data) {
            console.log('error while saving user...');
        });
    };

    scope.deleteUser = function(userFname, userIndex) {
        // Use of service
        var promise = UserService.delete(userFname);
        promise.success(function(data) {
            scope.users.splice(userIndex,1);
        });
        promise.error(function(data) {
            console.log('error while deleting user...');
        });
    };

}]);
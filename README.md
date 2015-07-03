# AngularJS-training-June-2015

[https://angularjs.org/](https://angularjs.org/img/AngularJS-large.png)

Day 1 (29-JUN-2015):  
- various frameworks: knockout / extjs / DOJO / ionic (ng extension for mobile) / dart  
- ionic: angularjs mobile development  
- dart: framework  
- Javascript:  
  - is NOT object oriented language but object based  
  - ways of defining objects in javascript  
    - var user = new Object();  
    - var user = {};  
  - property on a function: use this  
  - encapsulation of property: use var  
  - namespace: similar to package e.g. var ibm = {};  
  - memory leaks in javascript  
  - ways to avoid memory leaks:  
    - don't assign anything to window object  
    - assign null values which are not in use. e.g. window.ibm.login = null;  
  - modularization of javascript  
  - user IIFE functions (or self invoking functions)  
  - JavaScript Closures: an idea where values from outer function lives longer for inner functions  

- AngularJS:  
  - Tools: Batarang / Sublime / node.js  
  - Include angular.js file  
  - Angular directives (tags):  
    - ng-app  
    - ng-controller  
    - ng-model  
    - ng-bind  
  - {{}}: Data binding expressions  

===============================

Day 2 (30-JUN-2015):  
-AngularJS:  
  - One way or two way data binding  
  - Angular directives (tags):
    - ng-click  
    - ng-repeat  
    - ng-class  
    - ng-true-value  
    - ng-false-value  
  - Angular service:  
    - $http (https://docs.angularjs.org/api/ng/service/$http)  

What is `Promise`: A promise represents the eventual result of an operation. You can use a promise to specify what to do when an operation eventually succeeds or fails.  
http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/  

===============================

Day 3 (1-JULY-2015):
- AngularJS:
  - $http service:  
    - Create with just method name. e.g. http.put('data.json', scope.userForm)  
    - Create by passing JSON parameter like url, data, method, headers, etc.  
    - Use Angular service
  - service:
    - Create service with "module.service"  
  - filter  
    - Create filter with "module.filter"
    - One filter should serve ONLY ONE purpose  
    - $filter  

- To return anything using 'return' statement some character has to be on the same line. If we add anything on next line it will NOT work.  

- ng-grid: https://github.com/angular-ui/ng-grid/wiki  
  - Create grid with "gridOpts" to scope  
  - define data from scope object  
  - define column definition with "columnDefs"  
  - display name can be changed  
  - can define cell with different properties like editable / width / resizable  
  - can assign template to cell with "cellTemplate"  
  - can assign header template to cell with "headerCellTemplate"
  - can assess row values in template with row object and its properties like row.rowIndex, col.field etc

===============================

Day 4 (2-JULY-2015):
- AngularJS:
  - $http service: 
    - `transformRequest`: The transform function or an array of such functions. The transform function takes the http request body and headers and returns its transformed (typically serialized) version. e.g. function(data, headersGetter)
      - Can be added locally
      - Can be added at global level: $http.default.transformRequest(FUNCTION).
    - `transformResponse`: The transform function takes the http response body, headers and status and returns its transformed (typically deserialized) version.
    
- SPA (Single Page Application):
  - No page refresh
  - ajax call to transfer data
  - DOM manipulation
  
- ui.router
  - $stateProvider  
  - $urlRouteProvider

- Sample ebook search application developed consuming APIs from: http://it-ebooks-api.info/

===============================

Day 5 (4-JULY-2015):
- Node.js
  - Javascript engine running separately as server
  - npm command to use node js specific modules

- bower (http://bower.io/)

- Karma (http://karma-runner.github.io/0.8/index.html)  
  - Jasmine framework
  - Testing server / test JSON data
  - $httpBackend (https://docs.angularjs.org/api/ngMock/service/$httpBackend)  

- AngularJS:  
  - directive: (https://docs.angularjs.org/guide/directive)  
    - At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform the DOM element and its children.
    - restrict - EA  
    - link:  
      - link has access of scope object
    - compile:  
      - compile doesn't have the access of scope object
      
- Grunt (http://gruntjs.com/)  
  
- gulp (http://gulpjs.com/):  

- Yeoman (http://yeoman.io):  
  - Templates for web projects
  - For XD we have used `generator-angular-dropwizard` (AngularJS + Dropwizard): https://github.com/rayokota/generator-angular-dropwizard
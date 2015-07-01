# AngularJS-training-June-2015

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
    - $http  

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
   
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
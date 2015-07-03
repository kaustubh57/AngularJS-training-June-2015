1. Jquery is used to handle cross browser compatibility.
2. Jquery code not easy to maintain as it is not structured. Implementing MVC is very difficult.
3. Jquery does not provide data binding.
4. Jquery does not provide pagination.
5. Knockout and Durandal and Backbone are other Javascript libraries. Maintaining is difficult as they need to work with upgrade of Jquery.
6. Dojo and Ext JS are very thick and complex.
7. ionic JS is framework used for mobile development.
8. Dart
9. By default when a code is executed the scope is always mapped to window if not explicitly defined.
10. Function resolution includes only function name and not parameters.
11. Javascript is interpreted language.
12. arguments variable gives details of function arguments
13. constructor function is used for encapsulating a functionality that represents a class.
14. variable in javascript are case sensitive
15. Do not define a variable without keyword var.
16. Properties are public(using this keyword) and variables are private
17. Good practice is passing one object with properties to function instead of passing multiple parameters.
18. for namespace use var with {} e.g. var ibm={} and then define classes under this namespace.
19. Javascript is executed in javascript engine in browser. 
20. Javascript also has a garbage collector working for memory management.
21. Window object should not access your object directly.
22. DOM tree is created as soon  as you open an html or a tab.
23. If we want to execute code once and do not want to link object to window then use self invoking functions. This is used for avoiding name collision and avoid memory leaks.
e.g (function () {
    var x = "Hello!!";      // I will invoke myself
})();

24. Batarang for analysing various problems in application.
25. NGInspector is chrome extension for inspecting angular application.
26. Always mention module name before controller name in HTML.
27. For 2 way bind use ng-model and for one way bind use ng-bind
28. ng-bind will work with non editable fields and ng-model works with input fields.
29. user ng-true-value in checkbox
30. use ng-grid from ngmodules.org
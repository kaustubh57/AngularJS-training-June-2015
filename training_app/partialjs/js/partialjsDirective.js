(function() {
'use strict';

angular.module('partialjs')

// This directive renders partialjs
.directive('loadPartialJs', function() {
    return {
        restrict: 'E',
        compile: function(element, attributes){
            var type = attributes.type;
            var url = attributes.src;
            var charset = attributes.charset;

            if (type===undefined) {
                type = 'text/javascript';
            }

            if (url) {
                var script = document.querySelector("script[src*='"+url+"']");
                if (!script) {
                    var heads = document.getElementsByTagName("head");
                    if (heads && heads.length) {
                        var head = heads[0];
                        if (head) {
                            script = document.createElement('script');
                            script.setAttribute('src', url);
                            script.setAttribute('type', type);
                            if (charset) script.setAttribute('charset', charset);
                            head.appendChild(script);
                        }
                    }
                }
                return script;
            }
        }
    };
})

})();
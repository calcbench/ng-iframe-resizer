import {iFrameResizer} from 'iframe-resizer';

(function(ngIframeResizer) {
    'use strict';

    angular
        .module(ngIframeResizer, [])
        .directive(ngIframeResizer, function () {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    iFrameResizer({}, element[0]);
                }
            };
        });

}('ngIframeResizer'));

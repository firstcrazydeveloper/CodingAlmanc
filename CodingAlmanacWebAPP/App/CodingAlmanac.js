angular.module('CodingAlmanacAPP', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'WebAPIService', 'CodingAlmanacAPP.Configuration', 'CodingAlmanacAPP.Dashboard','CodingAlmanacAPP.Share'])
.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';


    $routeProvider.when('/', {
        templateUrl: '/App/Dashboard/landing.html',
        controller: "LandingCtrl"
    });
    
    $locationProvider.html5Mode(false);
    //$location.path('/home');
  
   
   
    //$provider.decorator('ngModelDirective', ['$delegate', function ($delegate) {
    //    var ngModel = $delegate[0], controller = ngModel.controller;
    //    ngModel.controller = ['$scope', '$element', '$attrs', '$injector', function (scope, element, attrs, $injector) {
    //        var $interpolate = $injector.get('$interpolate');
    //        attrs.$set('name', $interpolate(aatrs.name || '')(scope));
    //        $injector.invoke(controller, this,{
    //            '$scope':scope,
    //            '$element': $element,
    //            '$attrs':attrs

    //        })

    //    }];
    //    return $delegate;
    //}]);

}])
.controller('AppCtrl', ['$scope',  function ($scope) {
    $scope.title = "CODING ALMANAC";
    toastr.success('Application Loaded');


}])
    
.directive('ccSidebar', function () {
    // Opens and clsoes the sidebar menu.
    // Usage:
    //  <div data-cc-sidebar>
    // Creates:
    //  <div data-cc-sidebar class="sidebar">
    var directive = {
        link: link,
        restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
        var $sidebarInner = element.find('.sidebar-inner');
        var $dropdownElement = element.find('.sidebar-dropdown a');
        element.addClass('sidebar');
        $dropdownElement.click(dropdown);

        function dropdown(e) {
            var dropClass = 'dropy';
            e.preventDefault();
            if (!$dropdownElement.hasClass(dropClass)) {
                hideAllSidebars();
                $sidebarInner.slideDown(350);
                $dropdownElement.addClass(dropClass);
            } else if ($dropdownElement.hasClass(dropClass)) {
                $dropdownElement.removeClass(dropClass);
                $sidebarInner.slideUp(350);
            }

            function hideAllSidebars() {
                $sidebarInner.slideUp(350);
                $('.sidebar-dropdown a').removeClass(dropClass);
            }
        }
    }
});

(function(){
    'use strict';
    angular.module('ang-chart',[])
            .controller('ChartController',ChartController).config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);  ;
    function ChartController($scope,$http){  
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $scope.show = function(chart,$event) {
            $event.preventDefault();
            console.log(chart);
            $http({
                method: 'POST',
                url: '/csv',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                console.log(data);
            }).error(function (data, status, headers, config) {
                // handle error things
            });
        }; 
        
    }
          
})();
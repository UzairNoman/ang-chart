(function(){
    'use strict';
    angular.module('ang-chart',[])
            .controller('ChartController',ChartController);
    function ChartController($scope){
        this.data = {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    data: [40, 10, 60, 70, 20, 20]
                },
                {
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    data: [30, 70, 40, 90, 60, 70]
                }
            ]
        };
        // $scope.show = show;
        // function show(chart){
        //     console.log(chart);
        // }
    }        
})();
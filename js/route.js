var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/result", {
        templateUrl : './template/output.html'
    })
    .when("/tomato", {
        template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
    })
    .otherwise({
        template : ""
    });
});
app.controller('myCtrl',['$scope','$location',function($scope,$location){
    $scope.changeRoute= function(){
        $scope.pseudoRandom();
        //$scope.myFunc();
        $location.path('/result');
    }
    $scope.answer ='';
    $scope.accuracy ='';
    $scope.pseudoRandom =function(){
        var arrOfBirds = ["Ward's Trogon","Himalayan Snowcock","Himalayan Quail","Himalayan Monal","Blyth's Tragopan","Western Tragopan","kashmir Nuthatch","Kashmir flycathcer","himalayan black-lored tit","Himalayan Black citra","himalayan Griffon"];
        var totalSum = 0;
        for(var i=0 ;i<name.length;i++)
            {
                totalSum += name.charCodeAt(i);
             }
        while(totalSum >= arrOfBirds.length){
            var temp=0;
                while(totalSum > 0)
                {
                     temp += totalSum % 10;
                     totalSum /= 10;
                }
            totalSum =temp;
        }
        $scope.answer= arrOfBirds[parseInt(totalSum)];
        $scope.accuracy = (parseFloat(70.05)+parseFloat(totalSum)).toFixed(2);
    }
    $scope.loadSpinner = function(){
        setTimeout(function () {
            document.getElementById("loader").style.display = "none";
            document.getElementById("myDiv").style.display = "block";          
            }, 3000);
    }

}])
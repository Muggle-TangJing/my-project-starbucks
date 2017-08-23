



var app = angular.module('history',['ng','ngRoute']);

app.config(function ($routeProvider) {
        $routeProvider
    .when('/hStart',{
        templateUrl:'tpl/start.html'
            })
            .when('/hMain',{
                templateUrl:'tpl/main.html',
                controller:'mainCtrl'
            })
    .otherwise({redirectTo:'/hStart'})
});

app.controller('parentCtrl',['$scope','$location',
    function ($scope,$location) {
        $scope.jump= function (desPath) {
            $location.path(desPath)
        }
}]);
app.run(function($http){
    $http.defaults.headers.post={
        "content-type":"application/x-www-form-urlencoded"
    }
});
app.controller('mainCtrl',['$scope','$http','$httpParamSerializer',
    function($scope,$http,$httpParamSerializer){
    $scope.hasMore = true;
    $http
        .get('data/get_by_page.php?start=0')
        .success(function (data) {
          $scope.personList = data;
        });


    $scope.loadMore = function () {
        $http
            .get('data/get_by_page.php?start='
            + $scope.personList.length)
            .success(function (data) {
                if (data.length < 10) {
                    $scope.hasMore = false;
                }
                $scope.personList = $scope.personList.concat(data);
            })
    };

    $scope.uname="";
    $scope.content="";

$scope.add= function () {
    var params={uname:$scope.uname,content:$scope.content};
    console.log(params);
    params = $httpParamSerializer(params);
console.log(params)

        $http
            .post('data/add_content.php',params)
            .success(function(result){
                if(result){
                    alert('哎呀呀~发表留言成功啦！留言标号为:'+result[0].pid)
                }
                $scope.uname="";
                $scope.content="";
            })
    }
}]);




















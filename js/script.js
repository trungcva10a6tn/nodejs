var app = angular.module("myapp",[]);
app.controller("myctrl",function ($scope) {
    $scope.title="trung";
});
app.directive('progressBar', [function () {

    function ProgressCtrl($scope){
        $scope.defaultColor = 'blue';
    }

    return {
        scope: {
            value: '=value',//=, &, @
            color: '=color'
        },
        templateUrl: "tron.html"
    };
}]);
//gwfl 1.a  add "root" with empty array to angular.module
angular.module('root', [])

//gwfl 2.a  add "index" controller with $scope
    .controller("index", ["$scope", function ($scope) {

//gwfl 3.a  set ".message" in $scope
        $scope.message = "Hello World!";

    }]);

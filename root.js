//gwfl 0.1.a  add "root" with empty array to angular.module
angular.module('root', [])

//gwfl 0.2.a  add "index" controller with $scope
    .controller("index", ["$scope", function ($scope) {

//gwfl 0.3.a  set ".message" in $scope
        $scope.message = "Hello World!";
        
//gwfl 1.1.a  bind to html view using ngModel
        $scope.favoriteWord;
        $scope.favoriteColor;
        $scope.favoriteShape;
        
    }]);

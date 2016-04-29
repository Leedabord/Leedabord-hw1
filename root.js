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

//gwfl 1.2.a  ng-class applies class if returns true
		$scope.value = 1;
		$scope.isBold = function () { return $scope.value % 2 === 0; };
		$scope.isItalic = function () { return $scope.value % 3 === 0; };
		$scope.isUnderlined = function () { return $scope.value % 5 === 0; };
/*  <input type="text" ng-model="value" />
  <span ng-class="{bold: isBold(), italic: isItalic(), underline: isUnderlined()}">
        {{message}}
  </span> */
  
//gwfl 1.2.a  ng-repeat 
		$scope.products = [
			{id: 1, name: "Hockey puck"},
			{id: 2, name: "Golf club"},
			{id: 3, name: "Baseball bat"},
			{id: 4, name: "Lacrosse stick"}
		];

    }]);

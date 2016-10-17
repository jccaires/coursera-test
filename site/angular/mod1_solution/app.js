(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.name = "";
  $scope.message = "";

  function splitString(string){
      var arrayOfStrings = string.split(',');
      return arrayOfStrings.length;
  };
  //$scope.name = "Yaakov";
  //$scope.stateOfBeing = "hungry";

  //$scope.sayMessage = function () {
    //return "Yaakov likes to eat healthy snacks at night!";
//  };

  $scope.checkIfTooMuch = function () {
    //var things = $scope.name;
    var numberOfThings = splitString($scope.name)
    console.log(numberOfThings);
    if($scope.name == ""){

          $scope.message = "Please enter data first";
    }else{

      if(numberOfThings<=3){

          $scope.message = "Enjoy!";
      }
      if(numberOfThings > 3 ){

          $scope.message = "Too much!";
      }

    }

  };
}

})();

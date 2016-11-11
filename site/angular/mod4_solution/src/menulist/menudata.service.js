(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];



//method that returns a promise from de httpService from API
 service.getAllCategories = function (){

   var response = $http({
       method: "GET",
       url: (ApiBasePath + "/categories.json"),
     });
     console.log("saiu response");
    return response;

 };

//method that returns
service.getItemsForCategory = function (categoryShortName){

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;

  };

}

})();

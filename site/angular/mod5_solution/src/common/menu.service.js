(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.iSinfoSet=false;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavDish = function (short_name) {


    return $http.get(ApiPath + '/menu_items/'+ short_name + '.json').then(function (response) {
      return response;
    });
  };

  service.savePref = function (userdata) {

      service.iSinfoSet=true;
      service.userFirstName = userdata.user.firstname;
      service.userLastName = userdata.user.lastname;
      service.userEmail = userdata.user.email;
      service.userPhone = userdata.user.phone;
      service.favDish = userdata.user.favdish;
      
      /****************Dish elements************/
      service.name=userdata.data.name;
      service.short_name=userdata.data.short_name;
      service.description=userdata.data.description;
      service.price_small=userdata.data.price_small;
      service.small_portion_name=userdata.data.small_portion_name;
      service.price_large=userdata.data.price_large;
      service.large_portion_name=userdata.data.large_portion_name;
      //console.log('guardei os dados' + service.description);
      //console.log (service.userFirstName);
  };

}



})();

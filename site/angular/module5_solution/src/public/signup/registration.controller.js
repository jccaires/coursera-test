(function () {



angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService','ApiPath'];

function RegistrationController(MenuService, ApiPath) {
  var reg = this;
  reg.basePath=ApiPath;
  reg.data=[];


  //console.log("funcionou");

  reg.submit = function () {
    reg.user.error=false;
    reg.user.saveMsg = false;
    //console.log(reg.user.favdish);
    var promise = MenuService.getFavDish(reg.user.favdish);
    promise.then(function (response) {
      //console.log(response.data);
      reg.data = response.data;
      //console.log(response.data.description);
      reg.completed = true;

      MenuService.savePref(reg);
      reg.user.saveMsg=true;


        //if (response.data.menu_items.length == 0 ){console.log("entrou");menu.notFound = true; console.log(menu.notFound);}

    })
    .catch(function (error) {
      console.log(error);
      reg.user.error=true;
      reg.completed = false;
   })
/***********************/

    //reg.completed = true;
  };
}

})();

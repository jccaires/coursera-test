(function () {



angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService','ApiPath'];

function InfoController(MenuService, ApiPath) {
  var info = this;
  info.basePath=ApiPath;
  info.data=[];
  info.msgReg=true;



  if (MenuService.userFirstName == "undefined" ){
      console.log(MenuService.userFirstName+"estou aqui");
      info.msgReg=false;

  }

}

})();

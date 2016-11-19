(function () {



angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService','ApiPath'];

function InfoController(MenuService, ApiPath) {
  var info = this;
  info.basePath=ApiPath;
  info.data=[];
  info.msgReg=true;
  info.completed=false;

//console.log(info.msgReg);

  if (!MenuService.iSinfoSet){
      //console.log("estou aqui");
      info.msgReg=true;
     

  }else{

  //	console.log("posso apresentar os resultados e todo o html");
  	info.msgReg=false;
  	info.completed=true;
  	  info.userFirstName=MenuService.userFirstName;
      info.userLastName=MenuService.userLastName;
      info.userEmail=MenuService.userEmail;
      info.userPhone=MenuService.userPhone;
      info.favDish=MenuService.favDish;
      
      /****************Dish elements************/
       info.name=MenuService.name;
       info.short_name=MenuService.short_name;
       info.description=MenuService.description;
       info.price_small =MenuService.price_small;
       info.small_portion_name=MenuService.small_portion_name;
       info.price_large=MenuService.price_large;
       info.large_portion_name=MenuService.large_portion_name;


  }

}

})();

(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      //myTitle: '@title',
      //badRemove: '=',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.empty = false;
  menu.notFound = false;
  //menu.searchItem = menu.itemName;
 menu.searchItem = function () {
    
    if (menu.itemName == undefined || menu.itemName == ""){menu.empty = true; console.log(menu.empty); return;}else{menu.empty=false;}
    var promise = MenuSearchService.getMatchedMenuItems(menu.itemName);
      //console.log(promise);
    promise.then(function (response) {
      console.log("no controller");
      //console.log(response.data.menu_items[2]);
      menu.found = response.data;
       console.log(menu.found);
      //for (var i=0; response.data.menu_items.length; i++){
        //menu.found.push(response.data.menu_items[i])
      //}
        if (response.data.menu_items.length == 0 ){console.log("entrou");menu.notFound = true; console.log(menu.notFound);}
      
    })
    .catch(function (error) {
      console.log(error);
   })
   //console.log(menu.found)
  }


  menu.removeItem = function (itemIndex) {

      menu.found.menu_items.splice(itemIndex, 1);
    };




  //menu.searchItem = function (shortName) {
    //var promise = MenuSearchService.getMenuForCategory(shortName);

    //promise.then(function (response) {
    //  console.log(response.data);
  //  })
    //.catch(function (error) {
    //  console.log(error);
  //  })
//  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    //searchTerm="teste";
    //console.log(termo);

    var term = searchTerm.toLowerCase();
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      //params: {
        //description:
      //}
    });
    //console.log(response);
 return response.then( function (result){
      //console.log(result.data.menu_items);
       //var foundItems = [];
      // var found=result;
       //console.log(found.data)

       var foundItems =  result;
       console.log("no serviço");
       console.log(result.data);
         var straux = result.data.menu_items[11].description;
         //straux = straux.toLowerCase();
         console.log(straux);
         var stop = result.data.menu_items.length;
         console.log(stop);

         for (var i = result.data.menu_items.length -1; i >=0; i--) {
           //console.log(result.data.menu_items[i]);
           var str = result.data.menu_items[i].description;
           str = str.toLowerCase();

          // console.log(name);
            if (str.indexOf(term) == -1) {
              console.log("Nao tem"+ i);
              //return true
              //var val = {
                //short_name :result.data.menu_items[i].short_name,
                //descript : result.data.menu_items[i].description
              //};

              console.log("remover" + i)
              console.log(result.data.menu_items[i].description);
              console.log(foundItems.data.menu_items[i].description);
              result.data.menu_items.splice(i,1);
              //console.log(val);
              //console.log(result.data.menu_items[i].description);
              //console.log(result.data.menu_items[i].short_name);
              //foundItems.push(val);
            }else{ console.log("TEMMMMMM" + i );}
          }


        //console.log(foundItems.length);
        //console.log(foundItems.promise.data);
        return result;
    });

    //response = foundItems;

  //return response;
  //return foundItems;
  };



}

})();

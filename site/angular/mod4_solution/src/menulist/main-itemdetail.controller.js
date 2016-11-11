(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['item'];
function ItemDetailController(item) {
  var itemDetail = this;
  itemDetail.item = item.data.menu_items;
  console.log("esta quase");
  console.log(itemDetail.item);
}

})();

(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuytController', ToBuytController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuytController.$inject = ['ShoppingListCheckOffService'];
function ToBuytController(ShoppingListCheckOffService) {
  var itemToBuy = this;
  itemToBuy.msgBought = false;
//  console.log(itemToBuy.msgBought);

  itemToBuy.items = ShoppingListCheckOffService.getItemsToBuy();



  itemToBuy.addToBought = function (itemIndex) {
    ShoppingListCheckOffService.addItem(itemToBuy.items[itemIndex].name, itemToBuy.items[itemIndex].quantity, itemIndex);
    //itemToBuy.items.splice(itemIndex, 1);


    if ((itemToBuy.items.length === 0)){itemToBuy.msgBought = true;}
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.items = ShoppingListCheckOffService.getItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
var toBuy = [
     {name:'cookies',
      quantity:10
     },
     {name:'oranjes',
      quantity:3
     },
     {name:'apples',
      quantity:6
     },
     {name:'bananas',
      quantity:8
     },
     {name:'chocolate',
      quantity:1
     },
     {name:'beans',
      quantity:10
     },
     {name:'airspray',
      quantity:1
     },
     {name:'detergent',
      quantity:2
     },
     {name:'paper towels',
      quantity:1
     },
     {name:'sushi box',
      quantity:1
     },
    ]

  var items = [];

  service.addItem = function (itemName, quantity, index) {
      var item = {
        name: itemName,
        quantity: quantity
      };

      toBuy.splice(index, 1)
      items.push(item);
}
  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {

    return items;
  };
  service.getItemsToBuy = function () {
    return toBuy;
  };
}

})();

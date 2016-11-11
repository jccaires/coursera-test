(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menulist/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();

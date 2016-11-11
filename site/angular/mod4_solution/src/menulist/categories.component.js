(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menulist/templates/categorylist.template.html',
  bindings: {
    categories: '<'
  }
});

})();

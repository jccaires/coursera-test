(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['categories'];
function MainCategoryListController(categories) {
  var categoryList = this;
  categoryList.categories = categories.data;
  console.log(categoryList.categories);
}

})();

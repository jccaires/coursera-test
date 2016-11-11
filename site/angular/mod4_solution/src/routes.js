(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  //  list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menulist/templates/main-categorylist.template.html',
    controller: 'MainCategoryListController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {

        return MenuDataService.getAllCategories();
      }]
    }
  })

//  Item detail page
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menulist/templates/main-itemlist.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {

      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
                console.log($stateParams.itemId);
              return MenuDataService.getItemsForCategory($stateParams.itemId);


          }]
    }
  });
}

})();

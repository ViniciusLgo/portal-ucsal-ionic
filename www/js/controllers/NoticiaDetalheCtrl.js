angular.module('ucsalApp')

.controller('NoticiaDetalheCtrl', function($scope, $stateParams, NoticiasService) {

  // O id vem da URL, por exemplo #/app/noticias/3
  $scope.item = NoticiasService.buscarPorId($stateParams.id);
});

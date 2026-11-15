angular.module('ucsalApp')

.controller('NoticiasCtrl', function($scope, NoticiasService) {

  $scope.publicacoes = NoticiasService.listar();

  // Guarda qual botao de filtro esta selecionado
  $scope.categoriaSelecionada = '';

  $scope.filtrarPor = function(categoria) {
    $scope.categoriaSelecionada = categoria;
  };
});

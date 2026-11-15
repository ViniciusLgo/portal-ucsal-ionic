angular.module('ucsalApp')

.controller('MuralCtrl', function($scope, NoticiasService) {

  $scope.publicacoes = NoticiasService.listar();

  // Guarda qual botao de filtro esta selecionado
  $scope.categoriaSelecionada = '';

  $scope.filtrarPor = function(categoria) {
    $scope.categoriaSelecionada = categoria;
  };
});

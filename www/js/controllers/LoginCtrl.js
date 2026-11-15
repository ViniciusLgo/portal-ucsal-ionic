angular.module('ucsalApp')

.controller('LoginCtrl', function($scope, $state, AuthService) {

  $scope.credenciais = { matricula: '', senha: '' };
  $scope.erro = '';

  $scope.camposVazios = function() {
    return !$scope.credenciais.matricula || !$scope.credenciais.senha;
  };

  $scope.entrar = function() {
    if ($scope.camposVazios()) {
      $scope.erro = 'Preencha a matricula e a senha.';
      return;
    }
    if (!AuthService.autenticar($scope.credenciais.matricula, $scope.credenciais.senha)) {
      $scope.erro = 'Matricula ou senha invalida.';
      return;
    }
    $scope.erro = '';
    $state.go('menu.noticias');
  };
});
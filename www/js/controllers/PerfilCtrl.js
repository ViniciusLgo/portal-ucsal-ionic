angular.module('ucsalApp')

.controller('PerfilCtrl', function($scope, $ionicPopup, AlunoService) {

  $scope.dados = AlunoService.obter();

  // Usado no ng-disabled dos campos que o aluno nao pode editar
  $scope.camposBloqueados = true;

  $scope.salvar = function() {
    AlunoService.salvar($scope.dados);

    $ionicPopup.alert({
      title: 'Dados salvos',
      template: 'Suas informacoes de contato foram atualizadas.',
      okText: 'Fechar',
      okType: 'button-positive'
    });
  };
});

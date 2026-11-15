angular.module('ucsalApp')

.controller('FinanceiroCtrl', function($scope, $timeout, FinanceiroService) {

  $scope.semestres = FinanceiroService.listarSemestres();

  // Guardado dentro de um objeto por causa do escopo filho que o ion-content cria.
  // Com "filtro.semestre" o ng-model altera o objeto do controller, e nao uma copia.
  $scope.filtro = {
    semestre: $scope.semestres[$scope.semestres.length - 1]
  };

  // Guarda o mes que acabou de ser copiado, para mostrar o aviso
  $scope.mesCopiado = '';

  // Sempre que o aluno trocar o semestre no seletor, recarrega a lista
  $scope.$watch('filtro.semestre', function(semestre) {
    $scope.mensalidades = FinanceiroService.listarPorSemestre(semestre);
    $scope.totalAberto = FinanceiroService.totalEmAberto(semestre);
    $scope.mesCopiado = '';
  });

  $scope.copiarCodigo = function(parcela) {
    // Cria um campo escondido so para conseguir copiar o texto
    var campo = document.createElement('textarea');
    campo.value = parcela.codigoBarras;
    document.body.appendChild(campo);
    campo.select();
    document.execCommand('copy');
    document.body.removeChild(campo);

    $scope.mesCopiado = parcela.mes;

    // Some com o aviso depois de 3 segundos
    $timeout(function() {
      $scope.mesCopiado = '';
    }, 3000);
  };
});

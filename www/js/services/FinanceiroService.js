angular.module('ucsalApp')

.factory('FinanceiroService', function() {

  // Mensalidades mockadas, agrupadas por semestre letivo
  var mensalidades = {
    '2025.2': [
      { mes: 'Agosto',   vencimento: '2025-08-10', valor: 1180.00, status: 'Paga',   codigoBarras: '23793.38128 60007.812354 65000.063305 1 98760000118000' },
      { mes: 'Setembro', vencimento: '2025-09-10', valor: 1180.00, status: 'Paga',   codigoBarras: '23793.38128 60007.812354 65000.063305 2 98760000118000' },
      { mes: 'Outubro',  vencimento: '2025-10-10', valor: 1180.00, status: 'Paga',   codigoBarras: '23793.38128 60007.812354 65000.063305 3 98760000118000' },
      { mes: 'Novembro', vencimento: '2025-11-10', valor: 1180.00, status: 'Paga',   codigoBarras: '23793.38128 60007.812354 65000.063305 4 98760000118000' },
      { mes: 'Dezembro', vencimento: '2025-12-10', valor: 1180.00, status: 'Paga',   codigoBarras: '23793.38128 60007.812354 65000.063305 5 98760000118000' }
    ],
    '2026.1': [
      { mes: 'Fevereiro', vencimento: '2026-02-10', valor: 1245.00, status: 'Paga',  codigoBarras: '23793.38128 60007.812354 65000.063305 6 98760000124500' },
      { mes: 'Marco',     vencimento: '2026-03-10', valor: 1245.00, status: 'Paga',  codigoBarras: '23793.38128 60007.812354 65000.063305 7 98760000124500' },
      { mes: 'Abril',     vencimento: '2026-04-10', valor: 1245.00, status: 'Paga',  codigoBarras: '23793.38128 60007.812354 65000.063305 8 98760000124500' },
      { mes: 'Maio',      vencimento: '2026-05-10', valor: 1245.00, status: 'Paga',  codigoBarras: '23793.38128 60007.812354 65000.063305 9 98760000124500' },
      { mes: 'Junho',     vencimento: '2026-06-10', valor: 1245.00, status: 'Paga',  codigoBarras: '23793.38128 60007.812354 65000.063305 0 98760000124500' }
    ],
    '2026.2': [
      { mes: 'Agosto',   vencimento: '2026-08-10', valor: 1310.00, status: 'Paga',    codigoBarras: '23793.38128 60007.812354 65000.063305 1 98760000131000' },
      { mes: 'Setembro', vencimento: '2026-09-10', valor: 1310.00, status: 'Paga',    codigoBarras: '23793.38128 60007.812354 65000.063305 2 98760000131000' },
      { mes: 'Outubro',  vencimento: '2026-10-10', valor: 1310.00, status: 'Paga',    codigoBarras: '23793.38128 60007.812354 65000.063305 3 98760000131000' },
      { mes: 'Novembro', vencimento: '2026-11-10', valor: 1310.00, status: 'A Pagar', codigoBarras: '23793.38128 60007.812354 65000.063305 4 98760000131000' },
      { mes: 'Dezembro', vencimento: '2026-12-10', valor: 1310.00, status: 'A Pagar', codigoBarras: '23793.38128 60007.812354 65000.063305 5 98760000131000' }
    ]
  };

  return {

    listarSemestres: function() {
      return Object.keys(mensalidades);
    },

    listarPorSemestre: function(semestre) {
      return mensalidades[semestre] || [];
    },

    totalEmAberto: function(semestre) {
      var lista = mensalidades[semestre] || [];
      var total = 0;
      for (var i = 0; i < lista.length; i++) {
        if (lista[i].status === 'A Pagar') {
          total = total + lista[i].valor;
        }
      }
      return total;
    }
  };
});

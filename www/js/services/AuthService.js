angular.module('ucsalApp')

.factory('AuthService', function() {

  // Lista mockada de alunos (RF01) - fica privada dentro do service
  var alunos = [
    {
      matricula: '20261001',
      senha: '123456',
      nome: 'Vinicius Lago Cruz',
      curso: 'Engenharia de Software',
      campus: 'Pituacu'
    },
    {
      matricula: '20261002',
      senha: '654321',
      nome: 'Maria Clara Santos',
      curso: 'Engenharia de Software',
      campus: 'Federacao'
    }
  ];

  // Sessao em memoria
  var alunoLogado = null;

  return {
    autenticar: function(matricula, senha) {
      for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula === matricula && alunos[i].senha === senha) {
          alunoLogado = alunos[i];
          return true;
        }
      }
      return false;
    },
    getAlunoLogado: function() { return alunoLogado; },
    estaLogado: function() { return alunoLogado !== null; },
    sair: function() { alunoLogado = null; }
  };
});
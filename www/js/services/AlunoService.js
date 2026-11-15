angular.module('ucsalApp')

.factory('AlunoService', function(AuthService) {

  // Dados de contato mockados, separados por matricula
  var cadastros = {
    '20261001': {
      email: 'vinicius.cruz@ucsal.edu.br',
      telefone: '(71) 99999-1234',
      cep: '41740-090',
      rua: 'Av. Professor Pinto de Aguiar, 2589',
      bairro: 'Pituacu',
      cidade: 'Salvador'
    },
    '20261002': {
      email: 'maria.santos@ucsal.edu.br',
      telefone: '(71) 98888-4321',
      cep: '40110-100',
      rua: 'Rua Doutor Jose Peroba, 150',
      bairro: 'Federacao',
      cidade: 'Salvador'
    }
  };

  // Chave usada no localStorage para nao perder os dados ao recarregar
  function chave(matricula) {
    return 'cadastro_' + matricula;
  }

  return {

    obter: function() {
      var aluno = AuthService.getAlunoLogado();
      if (!aluno) {
        return null;
      }

      var salvo = localStorage.getItem(chave(aluno.matricula));
      var contato = salvo ? JSON.parse(salvo) : cadastros[aluno.matricula];

      // Monta uma copia para o formulario, assim o mock so muda quando o aluno salvar
      return {
        nome: aluno.nome,
        matricula: aluno.matricula,
        curso: aluno.curso,
        email: contato.email,
        telefone: contato.telefone,
        cep: contato.cep,
        rua: contato.rua,
        bairro: contato.bairro,
        cidade: contato.cidade
      };
    },

    salvar: function(dados) {
      var contato = {
        email: dados.email,
        telefone: dados.telefone,
        cep: dados.cep,
        rua: dados.rua,
        bairro: dados.bairro,
        cidade: dados.cidade
      };

      cadastros[dados.matricula] = contato;
      localStorage.setItem(chave(dados.matricula), JSON.stringify(contato));
    }
  };
});

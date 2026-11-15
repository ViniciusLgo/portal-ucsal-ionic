angular.module('ucsalApp')

.factory('NoticiasService', function() {

  // Publicacoes mockadas: noticias institucionais e eventos da UCSal
  var publicacoes = [
    {
      id: 1,
      titulo: 'Rematricula 2027.1 esta aberta',
      data: '2026-11-10',
      categoria: 'Noticia',
      imagem: 'img/rematricula.svg',
      resumo: 'O prazo para a rematricula do semestre 2027.1 vai ate o dia 30 de novembro.',
      conteudo: 'A rematricula para o semestre 2027.1 esta aberta no Portal do Aluno. O aluno precisa estar com as mensalidades em dia e sem pendencias na biblioteca. Quem perder o prazo so podera se matricular na semana de ajustes, sujeito a disponibilidade de vagas nas turmas.'
    },
    {
      id: 2,
      titulo: 'Edital de Iniciacao Cientifica 2027',
      data: '2026-11-05',
      categoria: 'Noticia',
      imagem: 'img/iniciacao.svg',
      resumo: 'Inscricoes abertas para bolsas de Iniciacao Cientifica nos dois campi.',
      conteudo: 'A Pro-Reitoria de Pesquisa publicou o edital de Iniciacao Cientifica 2027, com bolsas para projetos nas areas de tecnologia, saude e ciencias sociais. O aluno precisa ter um professor orientador e media geral acima de 7,0. As inscricoes vao ate 15 de dezembro.'
    },
    {
      id: 3,
      titulo: 'Semoc 2026: Semana de Mobilizacao Cientifica',
      data: '2026-10-28',
      categoria: 'Evento',
      imagem: 'img/semoc.svg',
      resumo: 'A Semoc acontece no campus Pituacu com palestras, minicursos e apresentacao de trabalhos.',
      conteudo: 'A Semana de Mobilizacao Cientifica reune estudantes e professores de todos os cursos para apresentar pesquisas e projetos de extensao. Nesta edicao a programacao inclui minicursos de inteligencia artificial e uma mesa redonda sobre o mercado de tecnologia na Bahia. A participacao conta como horas complementares.'
    },
    {
      id: 4,
      titulo: 'Maratona de Programacao da Escola de Tecnologias',
      data: '2026-10-20',
      categoria: 'Evento',
      imagem: 'img/maratona.svg',
      resumo: 'Equipes de tres alunos resolvem problemas de logica e algoritmos em cinco horas.',
      conteudo: 'A maratona e aberta aos cursos de Engenharia de Software, Ciencia da Computacao e Sistemas de Informacao. Cada equipe tem tres alunos e cinco horas para resolver a maior quantidade de problemas. As tres primeiras colocadas representam a UCSal na etapa regional.'
    },
    {
      id: 5,
      titulo: 'Projeto de extensao leva tecnologia para a comunidade',
      data: '2026-10-15',
      categoria: 'Evento',
      imagem: 'img/extensao.svg',
      resumo: 'Alunos da Escola de Tecnologias dao aulas de informatica basica no bairro de Pituacu.',
      conteudo: 'O projeto atende moradores do entorno do campus com aulas de informatica basica, uso de servicos digitais do governo e seguranca na internet. Os alunos voluntarios recebem certificado de horas de extensao ao final do semestre.'
    },
    {
      id: 6,
      titulo: 'Novo prazo para entrega de documentos',
      data: '2026-11-12',
      categoria: 'Noticia',
      imagem: 'img/documentos.svg',
      resumo: 'A secretaria ampliou o prazo de entrega de documentos pendentes ate o fim do mes.',
      conteudo: 'Alunos com documentacao pendente tem ate o dia 30 de novembro para entregar os documentos na secretaria dos campi Pituacu e Federacao. A pendencia bloqueia a emissao de historico e de declaracoes.'
    }
  ];

  return {
    listar: function() {
      return publicacoes;
    },
    buscarPorId: function(id) {
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === parseInt(id)) {
          return publicacoes[i];
        }
      }
      return null;
    }
  };
});

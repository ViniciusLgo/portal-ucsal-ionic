// Modulo principal da aplicacao, com o Ionic como dependencia
angular.module('ucsalApp', ['ionic'])

// Configuracao das rotas (SPA) com ui-router
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // Tela de login (fora do menu lateral)
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    // Moldura do app: menu lateral + barra de titulo.
    // E abstrata: nunca aparece sozinha, so serve de container.
    .state('menu', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

    // Telas filhas, exibidas dentro da view "conteudo" da moldura
    .state('menu.noticias', {
      url: '/noticias',
      views: {
        'conteudo': {
          templateUrl: 'templates/noticias.html'
        }
      }
    });

  // Rota padrao: qualquer URL desconhecida cai no login
  $urlRouterProvider.otherwise('/login');
});
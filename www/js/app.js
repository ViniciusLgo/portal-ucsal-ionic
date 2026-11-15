angular.module('ucsalApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    .state('menu', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

    .state('menu.mural', {
      url: '/mural',
      views: { 'conteudo': { templateUrl: 'templates/mural.html', controller: 'MuralCtrl' } }
    })

    .state('menu.perfil', {
      url: '/perfil',
      views: { 'conteudo': { templateUrl: 'templates/perfil.html' } }
    })

    .state('menu.financeiro', {
      url: '/financeiro',
      views: { 'conteudo': { templateUrl: 'templates/financeiro.html' } }
    });

  $urlRouterProvider.otherwise('/login');
})

// Protecao de rota: so entra nas telas internas se estiver logado
.run(function($rootScope, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function(evento, destino) {
    if (destino.name !== 'login' && !AuthService.estaLogado()) {
      evento.preventDefault();
      $state.go('login');
    }
  });
});

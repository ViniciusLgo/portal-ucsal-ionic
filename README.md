# Portal do Aluno UCSal

Protótipo front-end de um aplicativo multiplataforma para os alunos da Universidade Católica do Salvador, feito com Ionic 1 e AngularJS.

Atividade da disciplina Tópicos Avançados em Programação, Engenharia de Software, UCSal.
Professor Elton Figueiredo da Silva.
Aluno: Vinicius Lago Cruz.

## Sobre o projeto

O aplicativo resolve o problema descrito na atividade: hoje o aluno precisa acessar portais diferentes e não responsivos para ver mensalidades, atualizar seus dados e acompanhar o que acontece nos campi. Aqui tudo isso fica em um app só, que funciona em celular, tablet e desktop.

Não há banco de dados nem back-end. Todos os dados são mockados dentro dos Services do AngularJS, como a atividade pede.

## Como rodar

O projeto não precisa de build nem de instalação. O Ionic e o AngularJS vêm por CDN.

```bash
cd www
python3 -m http.server 8000
```

Depois é só abrir `http://localhost:8000` no navegador. No GitHub Codespaces, abra a aba Portas e clique no endereço da porta 8000.

### Login de teste

| Matrícula | Senha  | Aluno              |
|-----------|--------|--------------------|
| 20261001  | 123456 | Vinicius Lago Cruz |
| 20261002  | 654321 | Maria Clara Santos |

## O que o app faz

Autenticação com matrícula e senha, validando contra a lista de alunos do `AuthService`. O botão de entrar fica bloqueado enquanto os campos estiverem vazios, e credenciais erradas mostram uma mensagem de erro. Quem não está logado não consegue acessar as telas internas nem digitando a URL direto.

O mural lista notícias institucionais e eventos da UCSal em cards, com imagem, data, categoria e um botão para abrir o conteúdo completo. Os botões no topo filtram entre notícias e eventos.

Na tela de dados, o nome, a matrícula e o curso aparecem bloqueados para edição. O aluno pode alterar e-mail, telefone e endereço, e ao salvar os dados vão para o `AlunoService` e para o `localStorage`, então continuam lá depois de recarregar a página. Um popup confirma o salvamento.

Na tela financeira o aluno escolhe o semestre e vê as parcelas daquele período, com vencimento, valor em reais e um selo colorido indicando se está paga ou em aberto. As parcelas em aberto mostram a linha digitável e um botão que copia o código de barras, com um aviso de confirmação.

## Estrutura

```
www/
├── css/style.css
├── img/                      imagens das publicações
├── js/
│   ├── app.js                módulo, rotas e proteção de acesso
│   ├── controllers/
│   │   ├── LoginCtrl.js
│   │   ├── MenuCtrl.js
│   │   ├── NoticiasCtrl.js
│   │   ├── NoticiaDetalheCtrl.js
│   │   ├── PerfilCtrl.js
│   │   └── FinanceiroCtrl.js
│   └── services/
│       ├── AuthService.js        credenciais e sessão do aluno
│       ├── NoticiasService.js    notícias e eventos
│       ├── AlunoService.js       dados cadastrais
│       └── FinanceiroService.js  mensalidades por semestre
├── templates/
│   ├── login.html
│   ├── menu.html
│   ├── noticias.html
│   ├── noticia-detalhe.html
│   ├── perfil.html
│   └── financeiro.html
└── index.html
```

Nenhum dado fica escrito direto no HTML ou nos controllers. Os controllers só pedem os dados aos services e entregam para a view.

## Recursos do AngularJS usados

Rotas com `$stateProvider` e `$urlRouterProvider` do ui-router, incluindo uma rota com parâmetro (`/noticias/:id`) e um state abstrato que segura o menu lateral.

Services criados com `.factory()`, guardando os dados em variáveis privadas e expondo só os métodos de busca e atualização.

Nas views: `ng-model` no login, no cadastro e no seletor de semestre; `ng-repeat` nos cards e na lista de mensalidades; `ng-click` nos botões; `ng-if` nas mensagens de erro e nos blocos de parcela em aberto; `ng-class` para a cor dos selos e do filtro ativo; `ng-disabled` nos campos institucionais e no botão de entrar.

Filtros `currency` para os valores em reais, `date` para as datas e `filter` para separar notícias de eventos. O locale pt-BR é carregado por CDN para o dinheiro sair como `R$ 1.310,00`.

## Identidade visual

As cores vêm do portal real da UCSal: azul marinho `#253266` na barra e no menu, azul petróleo `#216F7D` nos destaques, azul claro `#49AEC8` nos botões e laranja `#FAA635` nos ícones. Ficam em variáveis CSS no topo do `style.css`.

## Detalhe que vale registrar

O seletor de semestre primeiro não funcionava: a lista não mudava ao trocar o semestre. O `ion-content` do Ionic cria um escopo filho, e um `ng-model` ligado a uma variável simples acabava criando uma cópia nesse escopo filho em vez de alterar a do controller. A correção foi guardar o valor dentro de um objeto e usar `ng-model="filtro.semestre"`.

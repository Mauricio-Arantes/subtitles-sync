<p align="center">
  <a href="https://www.npmjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" width="320" alt="NPM Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Pacote de manipulação de data para arquivos .srt proposto pela MindMinners</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

# Sobre

O projeto é um desafio proposta pela [MindMiners](https://mindminers.com/)!

O desafio consiste na criação de um pequeno pacote para manipulação de arquivos de legenda de extenção .srt.

Para o desenvolvimento deste pacote, utilizei como base o pacote do [Express](https://expressjs.com/), o boilerplate
do [TSDX](https://tsdx.io/) e [Jest](https://jestjs.io/) como biblioteca principal para realização dos testes. Por fim,
para gerenciar todos os pacotes, optei pelo compilador do [npm](https://www.npmjs.com/), tudo isso utilizando [Typescript](https://www.typescriptlang.org/).

# Instalação

```bash
$ npm i
```

# Rodando a aplicação

```bash
Como se trata de um pacote, a melhor forma de ver seu funcionamento
até que seja publicado, é rodar o ambiente de testes e alterar as
variáveis para ver a aplicação funcionando, ou levar o projeto para
uma aplicação nodeJs funcionando e levar o pacote como "helper" para o projeto.
```

# Rodando os testes

```bash
# Rodar todos os testes
npm test  # or yarn test.

# Rodar cobertura de testes
npm test:coverage  # or yarn test:coverage.
```

# Principais commandos

- `build`: cria a build para produção
- `start`: inicia um server com o código da build
- `lint`: roda o eslint
- `test`: roda os testes
- `test:watch`: roda os testes no watch mode
- `test:coverage`: roda os testes no coverage mode

Todos os comandos do TSDX já está configurado para rodar no diretório `/src`.


O build fica localizado no diretório `/dist` então qualquer mudança que venha ter no código é compilado a partir do que
foi realizado na pasta `src` que irá rebuildar a pasta `/dist`.

# Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


Feito com :heart: por <a href="https://github.com/Mauricio-Arantes" target="_blank">Mauricio Arantes</a>

&#xa0;

<a href="#top">Voltar para o topo</a>


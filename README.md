<h1 align="center">
  Personagens dos Vingadores
</h1>

<h4 align="center">
  Conheça os principais personagens da edição #1
</h4>

<p align="center">
  <img alt="Mobile Application Demo" src="https://github.com/isabelamoraes/avengers-characters/blob/main/demo/avengers-characters.gif?raw=true" width="60%">
</p>

## Funcionamento
- **Home**: tela de apresentação do aplicativo, que permite que o usuário acesse a listagem e conheça os personagens.
- **List Characters**: essa tela conta com a relação de todos os personagens da edição #1 dos Vingadores, obtida através da requisição da Marvel Comics API, sendo possível clicar sobre o personagem desejado para visualizar todos os detalhes.
- **Details Character**: nessa tela é possível visualizar todos os detalhes do personagem escolhido, tais como imagem, nome, descrição (caso tenha), número de HQs em que ele aparece e a listagem com o nome das 20 primeiras.

## Tecnologias

-  **[Expo](https://expo.io/)** - permite desenvolver aplicações mobile com React Native e com o Javascript como linguagem de programação. Para a criação do projeto foi utilizada a configuração Expo Bare Workflow, que além de trazer as facilidades proporcionadas pelo Expo, permite ter autonomia para realizar customização nas pastas nativas (Android e iOS) caso necessário.
- **[Expo Vector Icons](https://docs.expo.dev/guides/icons/)**: ao utilizar o Expo, é possível usufruir do Expo Vector Icons, uma coleção que reuni várias bibliotecas de ícones. Para essa aplicação foi utilizado o MaterialIcons, que apresentava todos os ícones desejados para a aplicação.
- **[TypeScript](https://reactnative.dev/docs/typescript)**: o TypeScript foi utilizado com o intuito de adicionar tipagem aos componentes da aplicação, de modo a facilitar a manutenção, aumentar a produtividade (IntelliSense) e evitar erros.
- **[Expo Font e Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)**: possibilitou utilizar as fontes Chivo e Overpass do Google para personalizar a tipografia da aplicação.
- **[App Loading](https://docs.expo.dev/versions/latest/sdk/app-loading/)**: recurso utilizado para manter a aplicação na tela de splash enquanto as fonts são carregadas.
- **[React Navigation](https://reactnavigation.org/)**: essa biblioteca foi utilizada com o intuito de criar a navegação e rotas da aplicação.
- **[Styled Components](https://styled-components.com/)**: biblioteca de estilização baseada em CSS. Ela foi utilizada devido à flexibilidade e dinamismo que oferece, possibilitando utilizar propriedades com base em estados.
- **[React Native Responsive Font Size](https://www.npmjs.com/package/react-native-responsive-fontsize)**: a partir dessa biblioteca foi possível utilizar a função RFValeu, que faz o tratamento do valor inserido, possibilitando trabalhar com diferentes proporções.
- **[Axios](https://github.com/axios/axios)**: essa biblioteca foi utilizada para lidar com requisição HTTP com a API.
- **[Moti](https://moti.fyi/)**: baseado na biblioteca Reanimated v2, o Moti permite criar animações para React Native.
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)**: possibilita trabalhar com o preenchimento gradiente nos componentes.
- **[Babel Plugin Inline Dotenv](https://www.npmjs.com/package/babel-plugin-inline-dotenv)**: permite gerenciar os dados sensíveis da aplicação.
- **[React Native Testing Library](https://github.com/callstack/react-native-testing-library)**: biblioteca de testes que faz o uso do Jest, uma das bibliotecas mais utilizadas para testes em ambiente Java Script.

## Instruções

Para clonar e executar essa aplicação, execute os seguintes comandos:

```bash
# Clonar o repositório
$ git clone https://github.com/isabelamoraes/avengers-characters.git avengers-characters

# Acessar a pasta do projeto
$ cd avengers-characters

# Installar as dependências
$ yarn

# Executar o projeto com o Expo
$ expo start

# Executar o teste
$ yarn test

```

## Referência

As informações sobre os personagens dessa aplicação são obstidas através da [Marvel Comics API](https://developer.marvel.com/).

## Design da Aplicação

De modo a auxiliar o processo de desenvolvimento do aplicativo, o design foi projetado no Figma e o modelo está disponível para visualização nesse [link](https://www.figma.com/file/fe2iHJqH0vo0GBdqk4CYKk/Avengers-Characters?node-id=0%3A1).
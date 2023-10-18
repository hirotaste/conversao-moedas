# Currency Converter App

Este é um aplicativo de conversão de moedas desenvolvido em Angular versão 16.


## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (com o npm)
- [Angular CLI](https://cli.angular.io/)


## Configurando o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/hirotaste/conversao-moedas

2. Navegue até o diretório do projeto:

   cd conversao-moedas

3. Instalando e Executando o projeto

   npm run dev

- OBS: O comando acima só funciona se estiver na pasta do projeto (conversao-moedas)


## Características Principais

- Armazenamento em Cache: Utilizamos a biblioteca RxJS para implementar o armazenamento em cache das taxas de câmbio. Isso permite que o aplicativo atualize automaticamente as taxas a cada 3 minutos, proporcionando uma experiência de usuário mais eficiente.

- Design Responsivo: O aplicativo é totalmente responsivo e se ajusta automaticamente a diferentes tamanhos de tela, desde dispositivos móveis até desktops.

- Conversão de Moedas: O aplicativo fornece as taxas de câmbio em tempo real através da API [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas).

- Recarregar Dados: Os usuários podem recarregar manualmente os dados caso houver erros, atualizando as taxas de câmbio instantaneamente.

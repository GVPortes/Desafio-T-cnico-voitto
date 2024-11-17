# Desafio Estágio TI 2024/2

<img alt="GoStack" src="https://imagens-voitto.s3.amazonaws.com/imagens-voitto/anexos/1727199164834home_header.jpg" />

<h2 align="center">
  Dashboard de Alunos
</h2>

<blockquote align="center">”A dedicação é a chave para o sucesso”</blockquote>

<p align="center">
  <a href="https://www.voitto.com.br" target="_blank">
    <img alt="Made by Grupo Voitto" src="https://img.shields.io/badge/made%20by-Grupo Voitto-%23000">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%23000">
</p>


## Sobre o desafio

Nesse desafio, você deve criar uma aplicação que integre uma API REST com uma interface web, utilizando Node.js e Next.js.

Essa será uma aplicação para controle de alunos, onde possibilite listar, cadastrar e excluir alunos, além de poder atribuir cursos e visualizar todos os cursos de um aluno.

Também existe um teste de lógica para poder apresentar melhor seu raciocínio com programação. 

## Template da aplicação

Para te ajudar nesse desafio, criamos um modelo que você deve utilizar como um template do Github.

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Grupo-Voitto/desafio-estagio)**

**Dica**: Utilize o botão 'use this template';

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal, nas pastas `web` e `api`, para instalar todas as dependências de ambas aplicações.

Na pasta `api`, crie um arquivo `.env` com base no `.env-example`. Lá você deve colocar as variáveis que referenciem o seu banco de dados local.

Lembre-se também de importar o banco de dados utilizando o arquivo `desafio-voitto.sql` disponível na raiz do projeto.

Após ter configurado o banco e com os pacotes instalados, você poderá iniciar as aplicações do desafio da seguinte forma:
   
   - Para iniciar a api entre na pasta "api" e digite o comando `yarn run dev`
   
   - Para iniciar o front-end entre na pasta "frontend" e digite o comando `yarn dev`

Após esses passos você conseguirá ver as intruções para realizar o desafio no endereço usado para rodar o front-end, que deve ser `http://localhost:3000/`;

## Sobre a aplicação

Serão realizados 3 testes:

### API

Aqui, você terá que criar uma API REST utilizando as boas práticas.

- Você vai precisar criar simplesmente a conexão local do seu servidor ( api ) com o seu banco de dados. Lembre-se de usar o voitto_desafio.sql é ele que possui nossa estrutura pronta
  - Uma dica, pode ser usar a conexão XAMPP + MySQL workbench

- Após ter feito toda a conexão, basta apenas criar as rotas e o sistema de  CRUD ( CREATE READ UPDATE E DELETE) e integrar com o frontend


### Teste de lógica

Aqui, você terá que criar uma buscador em uma sequência não fibonacci.

Se você não conhece, o vetor de Fibonacci consiste na soma dos últimos
dois algarismos da mesma equação:

```
   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
```

O objetivo desse exercício é trazer o enésimo número não pertencente à
esta sequência.

Se digitar 0: deve retornar erro. Se digitar 1, deve aparecer 4. Se
digitar 2, deve aparecer 6. E assim por diante.

### Teste Web

Aqui você terá que criar um admin de alunos onde deve listar, cadastrar e excluir alunos, além de poder atribuir cursos e visualizar todos os cursos de um aluno.

## Regras do teste

- Você pode fazer o que quiser com o projeto: criar novos componentes, baixar bibliotecas, refatorar código. Se for bem feito, será bem visto. Contudo, se não precisar, tudo bem.

- Alguns layouts foram propositalmente colocados com divergência do resto do código, seria interessante se gastassem um tempo melhorando esses pontos de discrepância.


## :calendar: Entrega

Esse desafio deve ser entregue via email. 

Envie com o assunto `Desafio Estágio TI 2024` para o email: (ti@voitto.com.br). O corpo do email deve possuir o link para o seu repositório do Github contendo a solução.

## Dúvidas e Sugestões

Deixamos um desenvolvedor da empresa disposto a ajudar você nessa jornada:

 - **[Henrico Piubello](https://github.com/henricop)** - hpiubello@gmail.com
 


---

Feito com :heart: by Grupo Voitto

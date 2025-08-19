# 🚀 Testes Automatizados com CodeceptJS

Repositório criado para estudo e prática nos primeiros passos com automação de testes com **CodeceptJS**, contemplando aprendizados do curso "*Iniciando no Mundo da Automação de Testes - DO ZERO*" da QAzando.

## ✅ Objetivo

Este repositório é voltado para:

- Praticar automação de testes end-to-end

- Aplicar conceitos teóricos do curso QAzando

- Servir como portfólio de estudo em testes

## 📂 Estrutura do Projeto

- `projeto/ → Projeto com configuração dos testes automatizados`

- `output/ → Relatórios, screenshots e logs`

- `cenarios_de_testes/ → documentação dos cenários de testes para cada funcionalidade`

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (>= 14.x)  
- [npm](https://www.npmjs.com/)  

### Instale as dependências do projeto:

`npm install`

## ▶️ Executando os testes

Acesse a pasta de `projeto` e no terminal, para rodar todos os testes, digite:

`npx codeceptjs run -- steps`

Caso queira rodar somente uma página de teste, por exemplo a página de login, utilize:

`npx codeceptjs run login_test.js`

Se desejar rodar apenas um cenário de teste, utilize as tags cadastradas em cada cenário. Por exemplo:

`npx codeceptjs run --grep @sucesso`


## HTTP - Protocolo de Transferência de Hipertexto

O protocolo HTTP define as regras de comunicação entre clientes e servidores, especificando como as informações são solicitadas e respondidas. Este documento apresenta uma visão geral dessas regras e as ferramentas utilizadas para desenvolver um projeto básico de API.

### Cliente e Servidor

O HTTP é baseado no modelo cliente-servidor, onde o cliente faz solicitações e o servidor responde.

### Regras do Protocolo HTTP

- **Header:** Define como a solicitação está sendo feita.
- **Body:** Indica o caminho pelo qual as informações passam.
- **Stateless:** O HTTP é um protocolo sem estado, ou seja, cada solicitação é independente das anteriores.
- **Métodos:** Especificam o tipo de ação que o servidor executará ao receber uma solicitação (por exemplo, operações CRUD).

### Métodos HTTP Mais Utilizados

- **GET:** Utilizado para leitura de dados do servidor. Exemplo: listar os dados pessoais de um usuário.
- **POST:** Usado para armazenamento de dados no servidor. Exemplo: cadastrar um novo usuário.
- **DELETE:** Para remover dados do servidor.
- **PUT:** Indica a substituição de um conjunto completo de dados. Exemplo: alterar todas as informações de um produto.
- **PATCH:** Indica a modificação parcial de um grupo de dados. Exemplo: alterar apenas o nome de um produto.

### Respostas HTTP

Após uma solicitação, o servidor retorna uma resposta específica. É importante entender os tipos de respostas:

- **Respostas Informativas (100 - 199):** Informações sobre a solicitação.
- **Respostas Bem-sucedidas (200 - 299):** Indicam que a solicitação foi bem-sucedida.
- **Mensagens de Redirecionamento (300 - 399):** Indicam que uma ação adicional é necessária.
- **Respostas de Erro do Cliente (400 - 499):** Indicadores de erros causados pela solicitação do cliente.
- **Respostas de Erro do Servidor (500 - 599):** Indicam que o servidor encontrou um erro ao processar a solicitação.

### Configuração do Projeto

Para começar a criar as rotas, foi criado um repositório chamado `ROTAS`, contendo duas pastas: `frontend` e `backend`.

#### Iniciando o Projeto

1. **Abrir o VS Code e selecionar a pasta "backend":**
    ```bash
    cd backend
    ```

2. **Iniciar o projeto Node.js:**
    ```bash
    npm init -y
    ```

3. **Instalar o Express:**
    ```bash
    npm install express
    ```

4. **Facilitar o carregamento da API com o Nodemon:**
    ```bash
    npm install nodemon
    ```

5. **Instalar o Body-Parser para trabalhar com dados de requisição:**
    ```bash
    npm install body-parser
    ```

6. **Instalação fácil de todas as dependências de uma vez:**
    ```bash
    npm i express nodemon body-parser
    ```

criar a pasta src

criar os arquivos 

server.js
app.js

Começar configurar o servidor 

na pasta server.js

no app.js
aqui vai a configuração da aplicação

inserir o start no arquivo package.json
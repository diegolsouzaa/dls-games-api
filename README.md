# DLS Games API

API REST para compra e venda de jogos de vídeo game.

## Funcionalidades
- Registro de vendedor
- Registro de comprador
- Cadastro de jogos (vendedor)
- Busca e consulta de jogos (comprador)
- Autenticação via JWT
- Documentação Swagger

## Camadas
- **routes**: Rotas da API
- **controllers**: Lógica de requisição/resposta
- **service**: Regras de negócio e acesso a dados
- **model**: Modelos de dados
- **resources**: Documentação Swagger

## Autenticação
- Vendedores: acesso total (cadastro, login, jogos)
- Compradores: apenas consulta e busca de jogos
- Autenticação via token JWT (middleware)

## Endpoints principais
- `POST /seller/register` — Registro de vendedor
- `POST /seller/login` — Login de vendedor
- `POST /buyer/register` — Registro de comprador
- `POST /buyer/login` — Login de comprador
- `POST /games` — Cadastro de jogo (vendedor)
- `GET /games` — Listar jogos (comprador)
- `GET /games/search?q=...` — Buscar jogos (comprador)
- `GET /docs` — Documentação Swagger

## Como rodar
1. Instale as dependências:
   ```bash
   npm install express swagger-ui-express jsonwebtoken
   ```
2. Inicie o servidor:
   ```bash
   node app.js
   ```
3. Acesse a documentação em [http://localhost:3000/docs](http://localhost:3000/docs)

## Observações
- Banco de dados em memória (dados não persistem após reiniciar)
- Veja o arquivo `resources/swagger.json` para detalhes dos endpoints e modelos JSON

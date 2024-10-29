### Passos para rodar o projeto:

1. Clone o repositório:

```
git clone https://github.com/ThaisdosSantos/Aws-DesafioCompass.git

```
# Para o frontend
```
cd plantei-web
npm install
```

# Para o backend
```
cd ../plantei-api
npm install
```

### Configure o arquivo .env para ambas as partes do projeto com as credenciais do banco de dados e Clerk.

#### Configurações do MongoDB
- MONGO_USER=seu_usuario
- MONGO_PASSWORD=sua_senha
- MONGO_HOST=localhost
- MONGO_PORT=27017
- MONGO_DB=nome_do_banco
- MONGO_OPTIONS=retryWrites=true&w=majority&appName=starwars-a

#### Configurações do Clerk
- CLERK_API_KEY=sua_chave_api_clerk
# Para rodar o projeto
```
cd plantei-web
npm run start
```


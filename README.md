# dsmovie
Semana Spring React
Ferramentas Utilizadas no projeto:
Curl
Git
Java JDK 11 ou 17
Maven
STS
Postman
Postgresql e pgAdmin
Heroku CLI
NodeJS 16.x
VS Code
DevSuperior no Instagram DevSuperior no Youtube

Objetivos do projeto
Implementar o back end
Modelo de domínio
Acesso a banco de dados
Estruturar o back end no padrão camadas
Criar endpoints da API REST
Implantação na nuvem
Modelo conceitual
Image

Padrão camadas adotado
Image

Criar repository
Criar DTO
Criar service
Criar controller
COMMIT: Find movies
Passo: Salvar avaliação
Lógica:
Informar email, id do filme e valor da avaliação (1 a 5).

Recuperar usuário do banco de dados pelo email. Se o usuário não existir, insira no banco.

Salvar a avaliação do usuário para o dado filme.

Recalcular a avaliação média do filme e salvar no banco de dados.

Image

Passo: Implantação no Heroku
Criar app no Heroku
Provisionar banco Postgres
Definir variável APP_PROFILE=prod
Conectar ao banco via pgAdmin
Criar seed do banco
heroku -v
heroku login
heroku git:remote -a <nome-do-app>
git remote -v
git subtree push --prefix backend heroku main
Passo: implantação no Netlify
Deploy básico

Base directory: frontend
Build command: yarn build
Publish directory: frontend/build
Arquivo _redirects

/* /index.html 200
Configurações adicionais
Site settings -> Domain Management: (colocar o nome que você quiser)
Deploys -> Trigger deploy

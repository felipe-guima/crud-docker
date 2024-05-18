Crud com docker

A aplicação em questao é um CRUD básico desenvolvido com:

Frontend - React e styled components
Backend  - Node, Express, Prisma ORM
Banco de Dados - PostgresSQL

O intuito é apresentar um crud funcional com todadas as partes da 
aplicação, preparadas para rodar em container.


Baixando o projeto 

Após baixar o projeto você deve rodar o comando, para a contrução das imagens no diretorio raiz da aplicação.

docker-compose up --build 

após a contrução das mesmas vc deve acessar outro terminal dentro da raiz do projeto e rodar o comando, para a migração da tabela e 
contrução do banco.

docker exec -it backend npx prisma migrate dev
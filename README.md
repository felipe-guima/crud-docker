# CRUD com Docker

A aplicação em questão é um **CRUD básico** desenvolvido com:

- **Frontend**: React e styled components
- **Backend**: Node, Express, Prisma ORM
- **Banco de Dados**: PostgreSQL

Todas as partes da aplicação estão em **containers Docker**. voce precisa de docker para rodar a aplicação. O intuito é apresentar um CRUD funcional com todas as partes da aplicação preparadas para rodar em containers.


## Instruções

**Crie o volume de persistência Docker**:

1 - Execute o seguinte comando para criar o volume: 

docker volume create dados-banco2

2 - Verifique a criação do volume com:
  
docker volume ls


**Baixando e executando o projeto**:

1 - Baixe do repositório:
  git clone https://github.com/felipe-guima/crud-docker
  ou baixe o ZIP.
  
2 - Certifique-se de ter o Docker instalado.

3 - Crie o arquivo .env na pasta server com o conteudo abaixo, ele contem a descricao do banco.

  DATABASE_URL="postgresql://postgres:docker1@postgres:5432/nodecrud?schema=public"
  
4 - Após baixar o projeto, execute o seguinte comando no diretório raiz da aplicação (onde se encontra a pasta `server`, `front` e o arquivo `docker-compose.yml`):

5 - docker-compose up --build

6 - Após a construção dos containers, acesse outro terminal dentro do diretório raiz do projeto e execute o seguinte comando para a migração da tabela e construção do banco em modo interativo no backend:

7 - docker exec -it backend npx prisma migrate dev

8 - Com os dados migrados para o banco PostgreSQL, você pode usar o CRUD no link da navbar "Marcar Consulta", inserindo, alterando e deletando dados do banco.

Após a criação da imagem apenas use no diretório raiz o comando para usos posteriores, depois de já construida a imagem.

docker-compose up

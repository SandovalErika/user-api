## Description

App backend de CRUD de usuarios.
App frontEnd de CRUD de usuarios

# Clonacion del proyecto y ejecucion desde Docker 

Para ejecutar la aplicación es necesario tener instalado Docker y ejecutar los siguientes comandos (ubicados sobre el directorio del proyecto):

```bash
# Para construir las imagenes y correr los contenedores:
sudo docker-compose up --build


# Luego se puede ver los endpoints documentados en swagger desde el navegador en:
localhost:8080/api/docs#
```

## Project setup

```bash
$ npm install
```

### Compilacion y ejecucion del proyecto desde entorno local 

```bash
# development
$ npm run start
```

## Run tests

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

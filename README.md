## Description

App backend de CRUD de usuarios.
App frontEnd de CRUD de usuarios

# Clonacion del proyecto y ejecucion desde Docker 

Para ejecutar la aplicación es necesario tener instalado Docker y ejecutar los siguientes comandos (ubicados sobre el directorio del proyecto):

```bash
##PASOS
# 1) Construir las imagenes y correr los contenedores:
sudo docker-compose up --build

# 2) Ir al navegador e colocar la url local 
http://localhost:3000/users

# 3) Se pueden ver los endpoints documentados en swagger desde el navegador en:
localhost:8080/api/docs#
```
-----------------------------------------------------------------------------------------------------------------------------------------------

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

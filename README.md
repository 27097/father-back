## Dependencias que podrias necesitar

- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) // Encriptaciones
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser) // mejorar el formato de las cookies
- [Cors](https://www.npmjs.com/package/cors) // conexion con el front
- [Dotenv](https://www.npmjs.com/package/dotenv) // variables de entorno
- [Express](https://www.npmjs.com/package/express) // ¿Qué es la función Express?
  Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) // define un método compacto y autocontenido para la transmisión segura de información entre partes codificadas como un objeto JSON

- [Morgan](https://www.npmjs.com/package/morgan) // registrar solicitudes y respuestas HTTP
- [Nodemon](https://www.npmjs.com/package/nodemon) // monitorear cualquier cambio en su fuente de directorio y reiniciar automáticamente su servidor o aplicaciones
- [Zod](https://www.npmjs.com/package/zod) // es un una herramienta para validación de esquemas
- [Jest](https://jestjs.io/docs/getting-started) // crear, ejecutar y estructurar pruebas
- [Supertest](https://www.npmjs.com/package/supertest) // se encarga de que la aplicación que se está probando se inicie en el puerto que utiliza internamente
- [Nodemailer](https://nodemailer.com/) // te permite enviar emails desde tu servidor con facilidad
- [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) //una serie de reglas, especificaciones y herramientas que nos ayudan a documentar nuestras APIs
- [Swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) // Transforma tus comentarios en el código fuente en documentación legible y estructurada para tus API

### DBMS



#### En caso que trabajes con PostgreSQL 

- [Sequelize](https://www.npmjs.com/package/sequelize) //es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql
- [pg](https://www.npmjs.com/package/pg) // Sequelize proporciona la funcionalidad ORM y la interfaz para interactuar con tu base de datos, mientras que el paquete pg proporciona la conexión a la base de datos PostgreSQL y las funciones necesarias para ejecutar las consultas SQL generadas por Sequelize.

## Consultas a la DB

### Buscar prod por su codigo

- GET: `http://localhost:3001/api/prod/code/123`

### Buscar prod por su nombre

- GET: `http://localhost:3001/api/prod?name=pepe`

### Buscar prod por su id

- GET: `http://localhost:3001/api/prod/456`

### crear prod

- POST: `http://localhost:3001/api/prod/`

```
Envio por body la informacion
{
  "name":"Jhon travolta",
  "description":"lo que tu quieras",
  "code":"123456",
  "price":123456
}

```

### Actualizamos prod

- PUT: `http://localhost:3001/api/prod/2`

```
por body envio los cambios deseados
{
  "name":"Jhon travolta",
  "description":"lo que tu quieras",
  "code":"123456",
  "price":123456
}

```

### Remover prod

- DELETE: `http://localhost:3001/api/prod/2`

## Archivo .env

```
PORT = 3001
TOKEN_SECRET = agregar un UUID
USER_Gmail =
PASS_Gmail
```

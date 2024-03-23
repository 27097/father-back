// levantamiento de db con Sequelize


const server = require('./src/app.js');
const { conn } = require('./src/db.js'); //importamos para hacer la conexion con la DB

// const ejempo1 = require('./src/ruta/archivo.js') 
// si quieres que una funcion se ejecute al levantar el server, la importas y la ejecutas dentro de la conexion

require('dotenv').config();
const {
  PORT
} = process.env;


conn.sync({ force: false }).then(() => {
 
    server.listen(PORT, () => {
        // ejempo1()
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console

   
  });
});
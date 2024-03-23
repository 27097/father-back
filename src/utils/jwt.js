// const jwt = require('jsonwebtoken') //instalar 
// // require('dotenv').config() // instalar dotenv i crear el archivo .env 
// const { TOKEN_SECRET } = process.env;


// const createAccesToken = (payload) => {
//     return new Promise((resolve, reject) => {
//         jwt.sign(
//             payload,
//             TOKEN_SECRET,
//             // { expiresIn: "1m" },
//             { expiresIn: "1d" },
//             (error, token) => {
//                 if (error) reject(error)
//                 resolve(token)
//             }
//         )
//     });
// }


// module.exports = { createAccesToken };
// aca llegaran todos las reques, dependiendo de su url la redireciona a su destino

const { Router } = require('express')  //instalar express 
const prod = require('./prod.routes')


const route = Router()

route.use('/prod', prod)
// route.use('/end-point1', router1)
// route.use('/end-point2', router2)
// route.use('/end-point3', router3)



module.exports = route
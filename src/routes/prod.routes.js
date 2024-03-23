const { Router } = require('express')
const handler = require('../handlers/prodHandler')

const validateSchema = require('../middleware/validator.Middleware') // para validar esquemas la informacion que entra
const { prodSchema } = require('../schemas/prod.schema') // esquema con la estructura de lo que deberia venir por body

const prod = Router()

prod.get('/', [handler.getProd])
prod.post('/', validateSchema(prodSchema), [handler.createProd])
prod.get('/code/:code', [handler.getProdByCode])
prod.get('/:id', [handler.getProdById])
prod.put('/:id', [handler.updateProd])
prod.delete('/:id', [handler.deleteProd])



module.exports = prod
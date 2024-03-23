// importar modelos
// const Prod = require()


module.exports = {
    getProd: (name) => {
        if (name) {
            return `hago toda la logica para traer el prod con nombre: ${name}, \n si no esta, retorno el mensaje adecuado`
        } else {
            return "retorno todos los prods de la DB"
        }
    },
    getProdByCode: (code) => {
        return `retorno el producto que tenga el codigo ${code}`
    },
    getProdById: (id) => {
        return `buscar prod que tenga el id: ${id}`
    },
    createProd: (name, description, code, price) => {
        return `Cremos prod con las propiedades: \n ${name}, \n ${description}, \n ${code}, \n ${price}`
    },
    updateProd: (id) => {
        return `actualizamos el prod que tiene el id: ${id}`
    },
    deleteProd: (id) => {
        return `eliminamos el prod que tiene el id: ${id}`
    }
};
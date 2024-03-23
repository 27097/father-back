const controller = require('../controllers/prodCtrl')


module.exports = {
    getProd: (req, res) => {
        const { name } = req.query;
        try {
            const aux = controller.getProd(name)
            res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({ message: [error.message] })
        }
    },
    getProdByCode: (req, res) => {
        const { code } = req.params;
        try {
            const aux = controller.getProdByCode(code)
            res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({ message: [error.message] })
        }
    },
    getProdById: (req, res) => {
        const { id } = req.params;
        try {
            const aux = controller.getProdById(id)
            res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({ message: [error.message] })
        }
    },
    createProd: (req, res) => {
        const { name, description, code, price, image } = req.body;
        try {
            const aux = controller.createProd(name, description, code, price, image)
            res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({ message: [error.message] })
        }
    },
    updateProd: (req, res) => {
        const { id } = req.params;
        try {
            const aux = controller.updateProd(id)
            res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({ message: [error.message] })
        }
    },
    deleteProd: (req, res) => {
        const { id } = req.params;
        try {
            const aux = controller.deleteProd(id)
            res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({ message: [error.message] })
        }
    },
}
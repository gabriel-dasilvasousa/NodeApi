const mongoose = require('mongoose');

const Products = mongoose.model('Product');

module.exports = {

    async index(req, res){
        const products = await Products.find();
        return res.json(products);
    },
};
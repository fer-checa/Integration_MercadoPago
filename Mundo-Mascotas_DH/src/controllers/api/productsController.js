const db = require('../../database/models');
const sequelize = db.sequelize;
const moment = require('moment');
const path = require('path');
const { Op } = require("sequelize");
const productsController = {


'list': (req, res) => {

    db.Products.findAll(

        {
            raw: true
        },

        {
            include: ['categoryAnimals','familyProducts']
        }
    
    )

            .then(products => {
               //estamos en el endpoint del list
               
                products.forEach(product => {
                    
                    product.detailUrl = 'http://localhost:3050/api/products/' + product.id

                });
               
                return res.json({
                    
                       meta : {
                           status: 200,
                           Count: products.length,
                           
                           url :"api/products"
                       },
                        data: products
                           
               })

})
},

/* 'detail': (req, res) => {

    db.Products.findByPk(req.params.id, {
        include: ['categoryAnimals','familyProducts']
    })
    .then(products => {
        return res.json({
       
                meta : {
                    status: 200,
                    total: products.length,
                    url :"api/products/:id"
                }, */
                 /* data: {
                    id: products.id,
                    name: products.name,
                    description: products.description,
                    image: products.image,
                    categoryAnimal_id: products.categoryAnimal_id,
                    familyProduct_id: products.familyProduct_id,
                    price: products.price,
                    discount: products.discount,
                    date_release: products.date_release,
                    user_id: products.user_id,
                    active: products.active,
                 } */
                 
                    
       /*  }) */

/* }) */

/* } */

'detail': (req, res) => {
    db.Products.findByPk(req.params.id,
        {
            include : ['categoryAnimals','familyProducts']
        })
        .then(products => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: '/api/products/' + req.params.id
                },
                data: products
            }

            res.json(respuesta)
        });
}
}

module.exports = productsController;

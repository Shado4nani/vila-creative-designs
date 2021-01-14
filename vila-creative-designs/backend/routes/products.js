const router = require('express').Router();

let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const productname = req.body.productname;
    const description = req.body.description;
    const productcategory = req.body.productcategory;
    const date = Date.parse(req.body.date);

    const newProduct = new Product({
        username,
        productname,
        description,
        productcategory,
        date,
    });

    newProduct.save()
        .then(() => res.json('Excercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => res.json('Product Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.username = req.body.username;
            product.productname = req.body.productname;
            product.description = req.body.description;
            product.productcategory = req.body.productcategory;
            product.date = req.body.date;
            product.save
                .then(() => res.json('Product Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
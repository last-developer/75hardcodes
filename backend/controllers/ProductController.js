const ProductSchema = require("../models/ProductSchema");

const dummyProducts = [
    { _id: '1', name: 'Product 1', description: 'Description for product 1' },
    { _id: '2', name: 'Product 2', description: 'Description for product 2' },
    { _id: '3', name: 'Product 3', description: 'Description for product 3' },
    { _id: '4', name: 'Product 4', description: 'Description for product 4' },
    { _id: '5', name: 'Product 5', description: 'Description for product 5' },
    { _id: '6', name: 'Product 6', description: 'Description for product 6' },
    { _id: '7', name: 'Product 7', description: 'Description for product 7' },
    { _id: '8', name: 'Product 8', description: 'Description for product 8' },
    { _id: '9', name: 'Product 9', description: 'Description for product 9' },
    { _id: '10', name: 'Product 10', description: 'Description for product 10' },
    { _id: '11', name: 'Product 11', description: 'Description for product 11' },
    { _id: '12', name: 'Product 12', description: 'Description for product 12' },
    { _id: '13', name: 'Product 13', description: 'Description for product 13' },
    { _id: '14', name: 'Product 14', description: 'Description for product 14' },
    { _id: '15', name: 'Product 15', description: 'Description for product 15' },
    { _id: '16', name: 'Product 16', description: 'Description for product 16' },
    { _id: '17', name: 'Product 17', description: 'Description for product 17' },
    { _id: '18', name: 'Product 18', description: 'Description for product 18' },
    { _id: '19', name: 'Product 19', description: 'Description for product 19' },
    { _id: '20', name: 'Product 20', description: 'Description for product 20' },
    { _id: '21', name: 'Product 21', description: 'Description for product 21' },
    { _id: '22', name: 'Product 22', description: 'Description for product 22' },
    { _id: '23', name: 'Product 23', description: 'Description for product 23' },
    { _id: '24', name: 'Product 24', description: 'Description for product 24' },
    { _id: '25', name: 'Product 25', description: 'Description for product 25' },
];

exports.getProducts = async (req, res) => {

    // when have real products from database, use that code--
    // const page = Number(req.query.page) || 1;
    // const limit = Number(req.query.limit) || 5;
    // const skip = (page - 1) * limit;

    // const totalItems = await ProductSchema.countDocuments();
    // const products = await ProductSchema.find().skip(skip).limit(limit);

    // res.json({
    //     totalPages: Math.ceil(totalItems / limit),
    //     currentPage: page,
    //     totalItems: totalItems,
    //     products: products,
    // });

    const page = Number(req.query.page) || 1;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(dummyProducts.length / itemsPerPage);
    const offset = (page - 1) * itemsPerPage;

    const paginatedProducts = dummyProducts.slice(offset, offset + itemsPerPage);

    res.json({
        products: paginatedProducts,
        totalPages: totalPages,
    });
}
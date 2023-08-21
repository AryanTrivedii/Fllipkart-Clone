const mongoose =require('mongoose')
const productSchema=new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    url: String,
    detailUrl: String,
    title: {
        shortTitle: String,
        longTitle: String
    },
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});
module.exports=mongoose.model('Product',productSchema)
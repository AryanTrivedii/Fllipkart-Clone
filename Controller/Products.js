const express=require('express')
const router =express.Router()
const products=require('../Default')
const Product =require('../Model/ProductSchema.js')
router.post('/products',async(req,res)=>{
    const productData = req.body;
 try {
        const existingProduct = await Product.findOne({ id: productData.id });
 if (existingProduct) {
            return res.status(400).json({ message: 'Product already exists' });
        }
 const product = new Product(productData);
        await product.save();
        console.log(`Product ${productData.id} inserted`);
        return res.status(201).json({ message: 'Product inserted' });
    } catch (error) {
        console.error('Error inserting product:', error);
        return res.status(500).json({ message: 'Product insertion error' });
    }
});

router.get('/getproducts', async (req, res) => {
    try {
        const products = await Product.find();
         return res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return res.status(500).json({ message: 'Error fetching products' });
    }
});

module.exports=router;
const Product = require('../model/product');
exports.addProduct = async (req,res,next) => {
    const product = new Product(req.body.name,req.body.price);
    try{
        await product.save();
    }
    catch(err){
        res.status(500).json({message: "something went wrong"});
    }
    
    // 200 means created
    res.status(200).json({ message: "Product added successfully" });
}

exports.getAllProducts = (req,res,next) => {

    const products = Product.findAll();
    res.status(200).json({ products })

}
exports.deleteOne = async (req,res,next) => {
    const id = req.params.id;
    let result;
    try{
        const result = await Product.deleteOne(+id); // plus means change str to int

    }catch(err){
        res.status(500).json({message: "something went wrong"});
    }
    res.status(200).json({result });

}
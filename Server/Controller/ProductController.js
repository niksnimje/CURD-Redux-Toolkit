const ProductModel = require("../Model/ProductModel");

const postData=async(req,res)=>{

    const {title ,price ,description ,image} =req.body

    if(!title || !price || !description || !image)
    {
        return res.status(400).json({ message: "Please Fill all information" });
    }
    try {
        await ProductModel.create({ title ,price ,description ,image });
        return res.status(200).json({ message: "Product Add Successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const getProduct=async(req,res)=>{
     try {
        const products = await ProductModel.find()
        if (!(products.length) > 0) {
            return res.status(404).json({ message: "Notes Not Found" })
        }
        return res.status(200).json({ message: "Notes Get Successfully", products })

    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
}

const deleteProduct=async(req,res)=>{
    
    const { productId } = req.params

    const isExistProduct = await ProductModel.findById(productId)

    if (!isExistProduct) {
        return res.status(404).json({ message: "Notes Not Found" })
    }

    await ProductModel.findByIdAndDelete(productId)
    
    return res.status(200).json({ message: "Notes Deleted Successfully" })
}

const updateProduct=async(req,res)=>{
    const { productId } = req.params
    const { title ,price ,description ,image} =req.body

    const isExistProduct = await ProductModel.findById(productId)
    if (!isExistProduct) {
        return res.status(404).json({ message: "Notes Not Found" })
    }
    
    if(!title || !price || !description || !image)
    {
        return res.status(400).json({ message: "Please Fill all information" });
    }

    await ProductModel.findByIdAndUpdate(productId,{title ,price ,description ,image})
    return res.status(200).json({ message: "Notes Deleted Successfully" })
}


module.exports={postData,getProduct,deleteProduct,updateProduct}
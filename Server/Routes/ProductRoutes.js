const express=require("express")
const { postData, getProduct, deleteProduct, updateProduct } = require("../Controller/ProductController")

const productRouter=express.Router("")



productRouter.post("/post",postData)

productRouter.get("/get",getProduct)

productRouter.delete("/delete/:productId",deleteProduct)

productRouter.put("/update/:productId",updateProduct)


module.exports=productRouter

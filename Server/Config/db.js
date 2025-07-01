const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://niksnimje4:ywg9VXiYZkqPmrnh@cluster0.ejsq4.mongodb.net/CURD?retryWrites=true&w=majority&appName=Cluster0")

module.exports=connection
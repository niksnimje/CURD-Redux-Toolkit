const express=require("express")
const connection = require("./Config/db")
const cors=require("cors");
const productRouter = require("./Routes/ProductRoutes")
const app=express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5174","http://localhost:3000","http://localhost:5173"],
    credentials: true,
}))
app.get("/",(req,res)=>{
    res.send("hellow")
})


app.use("/product",productRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Server is Runing")
    } catch (error) {
        console.log(error)
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import toast from 'react-hot-toast'

export const getProducts=createAsyncThunk('peoduct/getProducts',async()=>{
    const res=await axios.get("http://localhost:8080/product/get")
    return res.data.products;
})

export const deleteProduct=createAsyncThunk('product/deleteProduct',async(id,{dispatch})=>{
    await axios.delete(`http://localhost:8080/product/delete/${id}`)
    dispatch(getProducts())
    toast.success("Deleted")
})

export const addProducts=createAsyncThunk('product/addProduct',async(data,{dispatch})=>{
    await axios.post("http://localhost:8080/product/post",data)
    dispatch(getProducts())
    toast.success("Added")

})

export const updateProducts=createAsyncThunk('product/updateProducts',async({id,data},{dispatch})=>{
    await axios.put(`http://localhost:8080/product/update/${id}`,data)
    dispatch(getProducts())
    toast.success("Updated")
})

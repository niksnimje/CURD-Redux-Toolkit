import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateProducts } from '../React-Toolkit/Thunks/ProductThunks'


function EditProduct() {
   const {id}=useParams()
  const dispacth=useDispatch()
  const navigate=useNavigate()
  const {products}=useSelector((state)=>state.products)

  const [form,setform]=useState({
    title:'',
    price:'',
    description:'',
    image:''
  })

  useEffect(()=>{
    const updateData=products.find(p=>p._id==id)
    if(updateData)
    {
      setform(updateData)
    }
  },[id,products])

  const handleChange=(e)=>{
    e.preventDefault()
    setform({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispacth(updateProducts({id,data:form}))
    navigate("/product")
  }
  return (
   <>
       <div className="container mt-4">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" />
        <input name="price" value={form.price}  onChange={handleChange} className="form-control mb-2" placeholder="Price" />
        <textarea name="description" value={form.description} onChange={handleChange} className="form-control mb-2" placeholder="discription" />
        <input name="image" value={form.image} onChange={handleChange} className="form-control mb-2" placeholder="Image URL" />
        <button className="btn btn-success" type="submit">Update Product</button>
      </form>
    </div>
    </>
  )
}

export default EditProduct
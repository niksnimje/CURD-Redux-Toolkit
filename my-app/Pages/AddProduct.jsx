import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { addProducts } from "../React-Toolkit/Thunks/ProductThunks";




function AddProduct() {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [form,setform]=useState({
    title: '',
    price: '',
    description: '',
    image: ''
  })

  const onChange=(e)=>{
    e.preventDefault()
    setform({...form,[e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addProducts(form))
    navigate('/product')
  }


  return (
    <>
      <div className="container">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          name="title"
          placeholder="Product Title"
          required
          onChange={onChange}
        />
        <input
          className="form-control mb-2"
          type="number"
          name="price"
          placeholder="Price"
          required
          onChange={onChange}
        />
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          required
          onChange={onChange}
        ></textarea>
        <input
          className="form-control mb-2"
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={onChange}
        />
        <button className="btn btn-primary" type="submit">Add Product</button>
      </form>
    </div>
    </>
  )
}

export default AddProduct
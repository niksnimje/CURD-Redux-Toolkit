import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../React-Toolkit/Thunks/ProductThunks';
import { setSerach, setSort } from '../React-Toolkit/Sclice/ProductSclice';


function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredProducts, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Page</h2>
      
            <input
                type="text"
                placeholder="Search Product"
                onChange={(e) => dispatch(setSerach(e.target.value))}
              />


    <select onChange={(e) => dispatch(setSort(e.target.value))}>
      <option value="">Sort By</option>
      <option value="low">Low to High</option>
      <option value="high">High to Low</option>
    </select>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {filteredProducts.map((el, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={el.image} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">₹{el.price}</p>
                  <p className="card-text">{el.description}</p>
                  <button className="btn btn-secondary me-2" onClick={() => navigate(`/edit/${el._id}`)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(el._id))}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;

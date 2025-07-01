import { createSlice } from "@reduxjs/toolkit"
import { addProducts, deleteProduct, getProducts, updateProducts } from "../Thunks/ProductThunks";

const initialState={
    products:[],
    filteredProducts: [],
    filters:{
        search:"",
        sort:""
    },
    loading:false
}

const applyFilters = (products, filters) => {
    let result = products.filter((product) => 
    product.title.toLowerCase().includes(filters.search.toLowerCase()))
  
    if (filters.sort === 'low')
         {
        result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'high')
         {
        result.sort((a, b) => b.price - a.price);
    }
  return result;

};



const ProductSclice=createSlice({
    name:"products",
    initialState,
    reducers:{
            setSort(state, action) {
            state.filters.sort = action.payload
            state.filteredProducts = applyFilters(state.products, state.filters)
            },
             setSerach(state,action){
                state.filters.search=action.payload;
                state.filteredProducts=applyFilters(state.products,state.filters)
            }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
            state.filteredProducts=applyFilters(action.payload,state.filters)
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        .addCase(deleteProduct.pending,(state)=>{
            state.loading=true
        })
        .addCase(deleteProduct.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })


        .addCase(addProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(addProducts.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(addProducts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        .addCase(updateProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateProducts.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(updateProducts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export const { setSerach , setSort } = ProductSclice.actions;

export default ProductSclice.reducer
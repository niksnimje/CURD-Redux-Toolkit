import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Sclice/ProductSclice"
export const store=configureStore({
    reducer:{
        products: ProductReducer
    }
})
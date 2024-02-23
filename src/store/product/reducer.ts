import { createReducer } from '@reduxjs/toolkit'
import { Sites } from '@/interfaces/site'
import { SAVE_PRODUCT, SAVE_PRODUCTS } from './action'
import { Product } from '@/interfaces/product'



export interface ListProducts {
    products: Product[]
}
export const initialState: ListProducts = {
    products: []
}
export default createReducer(initialState, (builder) =>
    builder
        .addCase(SAVE_PRODUCTS, (state, action) => {
            state.products = action.payload.products
        })
        .addCase(SAVE_PRODUCT, (state, action) => {
            state.products[action.payload.id] = action.payload.products
        })
)
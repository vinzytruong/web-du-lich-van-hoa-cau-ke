import { Product } from '@/interfaces/product'
import { createAction } from '@reduxjs/toolkit'
import { DocumentData } from 'firebase/firestore'

export const SAVE_PRODUCTS = createAction<{ products: Product[] }>('@product/SAVE_PRODUCTS')
export const SAVE_PRODUCT = createAction<{ products: Product, id: number }>('@product/SAVE_PRODUCT')
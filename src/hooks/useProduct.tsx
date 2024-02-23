import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { SAVE_PRODUCT } from '@/store/product/action';
import { Product } from '@/interfaces/product';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig';

export default function useProduct() {
    const dataProduct = useAppSelector((state) => state.product);
    const [isLoadding, setIsLoading] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchDataProduct = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "san-pham"));
                querySnapshot.forEach((doc) => {
                    setProducts({
                        id: doc.data().id,
                        name: doc.data().name,
                        author: doc.data().author,
                        address: doc.data().address,
                        star: doc.data().star,
                        detail: doc.data().detail
                    }, doc.data().id);
                });
                setIsLoading(false)
            } catch (e) {
                console.error("Error adding document: ", e);
            } finally {
                setIsLoading(false)
            }
        };
        fetchDataProduct()
    }, []);

    const setProducts = (productData: Product, id: number) => {
        dispatch(SAVE_PRODUCT({ products: productData, id: id }))
    }

    return {
        dataProduct, setProducts, isLoadding
    };
}

import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { SAVE_PRODUCT, SAVE_PRODUCTS } from '@/store/product/action';
import { Product } from '@/interfaces/product';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { SAVE_SITE } from '@/store/sites/action';
import { Sites } from '@/interfaces/site';

export default function useSites() {
    const dataSites = useAppSelector((state) => state.sites);
    const [isLoadding, setIsLoading] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchDataSites = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "dia-diem"));
                querySnapshot.forEach((doc) => {
                    console.log(doc.data());

                    setSites({
                        id: doc.data().id,
                        idDoc: doc.id,
                        photo: doc.data().photo,
                        name: doc.data().name,
                        category: doc.data().category,
                        address: doc.data().address,
                        description: doc.data().description,
                        detail: doc.data().detail,
                        isPopular: doc.data().isPopular,

                    }, doc.data().id);
                });
                setIsLoading(false)
            } catch (e) {
                console.error("Error adding document: ", e);
            } finally {
                setIsLoading(false)
            }
        };
        fetchDataSites()
    }, []);

    const setSites = (sitesData: Sites, id: number) => {
        dispatch(SAVE_SITE({ site: sitesData, id: id }))
    }
    // const updateDocument = async (id: any, textHtml: any) => {

    //     try {
    //         //   const docRef = firestore.collection('your_collection').doc(data.id);
    //         await updateDoc(doc(db, "dia-diem", id), {
    //             detail: textHtml
    //         });

    //         console.log('Document updated successfully!');
    //     } catch (error) {
    //         console.error('Error updating document: ', error);
    //     }
    // };

    const updateDocument = async (id: any, textHtml: any) => {
        const examcollref = doc(db, 'dia-diem', id)
        updateDoc(examcollref, {
            detail: textHtml,
        }).then(response => {
            alert("updated")
        }).catch(error => {
            console.log(error.message)
        })
    }

    const getSite = (id: number) => {
        return dataSites.sites[id]
    }

    return {
        dataSites, setSites, getSite, updateDocument, isLoaddingSites: isLoadding
    };
}

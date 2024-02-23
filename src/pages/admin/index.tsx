import React, { useState } from 'react';
import { StyledButton } from '@/components/styled-button';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/services/firebase';
import { logOut } from '@/services/utils';
import { useRouter } from 'next/router';
import TableProduct from '@/components/table/table-product';
import { MainLayout } from '@/components/layout';
import { Container, Skeleton } from '@mui/material';
import useProduct from '@/hooks/useProduct';
import { addDoc, collection } from 'firebase/firestore';
import { data } from '@/data/tourist-attraction.data';
import TableSites from '@/components/table/table-sites';
import useSites from '@/hooks/useSites';
export default function Admin() {
    const [uid, setUid] = useState<string>();
    const router = useRouter()

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUid(user.uid)
        } else {
            router.push('/login')
        }
    });


    // function createTxtFile() {
    //     const content = text; // Nội dung bạn muốn ghi vào tệp .txt
    //     const element = document.createElement('a');
    //     const file = new Blob([content], { type: 'text/plain' });
    //     element.href = URL.createObjectURL(file);
    //     element.download = 'example.txt';
    //     document.body.appendChild(element); // You can append it to any element
    //     element.click();
    // }



    // function saveContentToFirebase() {
    //     const content = text; // Nội dung bạn muốn ghi vào tệp .txt

    //     const file = new Blob([content], { type: 'text/plain' });
    //     // Tải Blob lên Firebase Storage

    //     const storageRef = ref(storage, "string.txt");
    //     const uploadTask = uploadBytesResumable(storageRef, file);
    //     uploadTask.on("state_changed",
    //         (snapshot) => {
    //             const progress =
    //                 Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //             setProgresspercent(progress);
    //         },
    //         (error) => {
    //             alert(error);
    //         },
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
    //                 setUrl(downloadURL)

    //             });

    //         }
    //     );


    //     console.log('String uploaded successfully as file');
    // }
    const sendData = async () => {
        data.map(async (item: any) => {
            try {

                const docRef = await addDoc(collection(db, "dia-diem"), {
                    id: item.id,
                    idDoc: item.idDoc,
                    photo: item.photo,
                    name: item.name,
                    category: item.category,
                    address: item.address,
                    description: item.description,
                    isPopular: item.isPopular,
                    detail: item.detail
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })

    }

    const [url, setUrl] = useState<string>('');
    const [progresspercent, setProgresspercent] = useState(0);

    // const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { dataProduct, isLoadding } = useProduct()
    const { dataSites, isLoaddingSites } = useSites()

    return (

        //     {/* <div className="App">
        //         <form onSubmit={handleSubmit} className='form'>
        //             <input type='file' />
        //             <button type='submit'>Upload</button>
        //         </form>
        //         {
        //             !imgUrl &&
        //             <div className='outerbar'>
        //                 <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        //             </div>
        //         }
        //         {
        //             imgUrl &&
        //             <img src={imgUrl} alt='uploaded file' height={200} />
        //         }
        //     </div> */}
        <MainLayout>
            <StyledButton onClick={logOut}>Đăng xuất</StyledButton>
            {/* <StyledButton onClick={sendData}>Thêm tất cả</StyledButton> */}
            <Container maxWidth="xl">

                {isLoadding ?
                    <Skeleton height='200px' />
                    :
                    <TableProduct data={dataProduct.products} isAdmin={uid ? true : false} />
                }
                {isLoaddingSites ?
                    <Skeleton height='200px' />
                    :
                    <TableSites data={dataSites.sites} isAdmin={uid ? true : false} />
                }


            </Container>

        </MainLayout>

    );
}
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account "
});

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            return user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);

            return error;
        });
}

export const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "dia-diem"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().address}`);
    });
};
export const fetchDataProduct = async () => {
    const querySnapshot = await getDocs(collection(db, "san-pham"));
    return querySnapshot
};

export const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account "
});

export const signInWithGooglePopup = () => {

    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("user", user);
            return user;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);

            return error;
            // ...
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
export const sendData = async () => {
    try {
        const docRef = await addDoc(collection(db, "dia-diem"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/config";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const db = getFirestore(app);
const auth = getAuth()

export async function addNewUser(email, password, username) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        userCredential.user.displayName = username
        return userCredential
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function saveDataToFirestore(username, email, phone, userCredential) {
    try {
        await setDoc(doc(db, "Users", userCredential.user.uid), {
            id: userCredential.user.uid,
            username,
            email,
            phone
        });
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function signInToFirebase(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log('logged');
        return userCredential;
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function userSignOut() {
    try {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('logged out')
        }).catch((error) => {
            console.log(error.message);
        });
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function getUserData(uid) {
    try {
        const docRef = doc(db, "Users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            throw new Error("No such document!")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


export async function uploadImages(image, Category, price, user, name) {
    try {
        // Create a root reference
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`)
        await uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        let url = await getDownloadURL(storageRef);
        console.log(url)
        console.log({ user })

        await addDoc(collection(db, "products"), {
            user: user.uid,
            name,
            Category,
            price,
            url,
            createdAt: new Date().toDateString(),
        });
        await getProducts()
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function getProducts() {
    try {
        let snapshot = await getDocs(collection(db, "products"));
        let allProducts = snapshot?.docs?.map((product) => {
            return {
                ...product.data(),
                id: product.id,
            };
        });
        return allProducts
    } catch (error) {
        throw new Error(error.message)
    }
}

// export async function getSellerDetails(userId) {
//     try {
//         const citiesRef = collection(db, "Users");
//         const q = query(citiesRef, where("id", "==", userId));
//         return q
//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

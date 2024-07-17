import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/config";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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
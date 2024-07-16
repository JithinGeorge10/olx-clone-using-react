import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/config";
import { doc, getFirestore, setDoc } from "firebase/firestore";
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
        await setDoc(doc(db, "Users", username), {
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
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('logged')
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function checkUser() {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
            } else {
               
            }
        });
    } catch (error) {
        throw new Error(error.message)
    }
}
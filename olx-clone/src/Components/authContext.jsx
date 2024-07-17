import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()


export default function AuthProvider({ children }) {

    const [user, setUser] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null)
            }
        });
    }, [])
    console.log({user})
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

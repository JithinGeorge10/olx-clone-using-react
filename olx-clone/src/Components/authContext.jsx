import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()


export default function AuthProvider({ children }) {

    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false)
            } else {
                setUser(null)
                setIsLoading(false)
            }
        });

    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

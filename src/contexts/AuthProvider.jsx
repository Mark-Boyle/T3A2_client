import React, {useState} from 'react'

export const AuthContext = React.createContext({
    
});

export default function AuthProvider({children}) {

    const [auth, setAuth] = useState({
        loggedIn: !!localStorage.getItem('token'),
        username: localStorage.getItem('username'),
        userId: localStorage.getItem('userId')
    })
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

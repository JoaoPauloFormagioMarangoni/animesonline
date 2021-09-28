import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { signIn } from '../services/auth';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    name: string;
    email: string;
    favorite: boolean;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    isSignIn: () => Promise<void>;
    isSignOut: () => void;
    favorite: () => void;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storageUser = localStorage.getItem('@ANIMESON:user')
        const storageToken = localStorage.getItem('@ANIMESON:token')

        if (storageToken && storageUser) {
            api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
            setUser(JSON.parse(storageUser));
        }
    }, [])

    async function isSignIn() {
        setLoading(true);
        const response = await signIn();
        setUser(response.user);

        localStorage.setItem('@ANIMESON:user', JSON.stringify(response.user))
        localStorage.setItem('@ANIMESON:token', response.token)
        setLoading(false);
    }

    function isSignOut() {
        localStorage.removeItem('@ANIMESON:user')
        localStorage.removeItem('@ANIMESON:token')
        setUser(null);
    }

    function favorite() {
        if (user?.favorite) {
            const newUser = {
                email: user?.email,
                name: user?.name,
                favorite: false,
            }
            setUser(newUser);
            localStorage.setItem('@ANIMESON:user', JSON.stringify(user))

        } else if (user?.favorite === false) {
            const newUser = {
                email: user?.email,
                name: user?.name,
                favorite: true,
            }
            setUser(newUser);
            localStorage.setItem('@ANIMESON:user', JSON.stringify(user))

        }

    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, isSignIn, isSignOut, favorite }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface AnimesProps {
    children: ReactNode;
}

interface animeNewsProps {
    id: number;
    title: string;
    createdAt: string;
    category: string;
    banner: string;
    text: string;
}

interface animesProps {
    animeNewsData: animeNewsProps[];
}

const animesNewsContext = createContext({} as animesProps);

export function AnimesNewsProvider({ children }: AnimesProps) {
    const [animeNewsData, setAnimeNewsData] = useState<animeNewsProps[]>([])
    useEffect(() => {
        async function LoadingData() {
            const response = await api.get(`/animeNews`);
            setAnimeNewsData(response.data)
        }
        LoadingData()
    }, [])

    return (
        <animesNewsContext.Provider value={{animeNewsData}}>
            {children}
        </animesNewsContext.Provider>
    );
}

export function useAnimesNews() {
    const context = useContext(animesNewsContext);

    return context;
}
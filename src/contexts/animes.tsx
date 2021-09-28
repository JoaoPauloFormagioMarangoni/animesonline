import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AnimesProps {
    children: ReactNode;
}

interface AnimeProps {
    id: string;
    attributes: {
        canonicalTitle: string;
        posterImage: ImagesProps;
        updatedAt: string;
        createdAt: string;
        episodeCount: number;
        description: string;
        status: string;
        youtubeVideoId: string;
    }
}

interface ImagesProps {
    original: string;
    small: string;
}

interface AnimesContextProps {
    newEpisodes: AnimeProps[];
}

const AnimesContext = createContext({} as AnimesContextProps);

export function AnimesProvider({ children }: AnimesProps) {
    const [newEpisodes, setNewEpisodes] = useState<AnimeProps[]>([]);

    useEffect(() => {
        async function animeData() {
            await fetch(`https://kitsu.io/api/edge/anime`)
                .then(response => response.json())
                .then(response => setNewEpisodes(response.data))
        }
        animeData()
    }, [])

    return (
        <AnimesContext.Provider value={{ newEpisodes }}>
            {children}
        </AnimesContext.Provider>
    );
}

export function useAnimes() {
    const context = useContext(AnimesContext);

    return context;
}
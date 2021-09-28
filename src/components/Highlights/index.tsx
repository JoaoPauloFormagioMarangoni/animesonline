import { Container } from './styles';
import { useAnimes } from '../../contexts/animes';
import { useEffect, useState } from 'react';

interface PropsHighlights {
    openModal: (nameAnime: string) => void;
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

export function Highlights({ openModal }: PropsHighlights) {
    const { newEpisodes } = useAnimes()
    const [animes, setAnimes] = useState<AnimeProps[]>([])

    useEffect(() => {
        setAnimes(newEpisodes.filter(anime => Number(anime.id) < 7))
    }, [newEpisodes])

    return (
        <Container>
            <h1>Highlights</h1>
            <div className="gridAnimes">
                {animes.map(anime => (
                    <div key={anime.id} onClick={() => openModal(anime.id)}>
                        <img 
                            src={anime.attributes.posterImage.original} 
                            alt={anime.attributes.canonicalTitle} 
                        />
                        <span>{anime.attributes.canonicalTitle}</span>
                    </div>
                ))}
            </div>
        </Container>
    );
}
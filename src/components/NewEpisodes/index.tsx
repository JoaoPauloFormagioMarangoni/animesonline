import { useEffect, useState } from 'react';
import { useAnimes } from '../../contexts/animes';
import { useAuth } from '../../contexts/auth';
import { Container, SubtitleImg } from './styles';

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

export function NewEpisodes() {
    const { signed } = useAuth()
    const { newEpisodes } = useAnimes()

    const [animes, setAnimes] = useState<AnimeProps[]>([])
    const [isViewMore, setIsViewMore] = useState(false)

    useEffect(() => {
        setAnimes(newEpisodes.filter(anime => Number(anime.id) < 7))
    }, [newEpisodes])

    return (
        <Container>
            <h2>New Episodes</h2>
            <div>
                {isViewMore ? (
                    newEpisodes.map(anime => (
                        <a
                            key={anime.id}
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`}
                        >
                            <img src={anime.attributes.posterImage.original} alt="The God Of High School" />
                            <SubtitleImg>
                                <div>
                                    <button>HD</button>
                                    <button>Legendado</button>
                                </div>
                                <div>
                                    <h3>{anime.attributes.canonicalTitle} - {anime.attributes.episodeCount}</h3>
                                    <span>Status: {anime.attributes.status}</span>
                                </div>
                            </SubtitleImg>
                        </a>
                    ))
                ) : (
                    animes.map(anime => (
                        <a
                            key={anime.id}
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`}
                        >
                            <img src={anime.attributes.posterImage.original} alt="The God Of High School" />
                            <SubtitleImg>
                                <div>
                                    <button>HD</button>
                                    <button>Legendado</button>
                                </div>
                                <div>
                                    <h3>{anime.attributes.canonicalTitle} - {anime.attributes.episodeCount}</h3>
                                    <span>Status: {anime.attributes.status}</span>
                                </div>
                            </SubtitleImg>
                        </a>
                    ))
                )}
            </div>
            <button onClick={() => setIsViewMore(!isViewMore)} disabled={signed ? false : true}>{isViewMore ? "View less" : "View more"}</button>
        </Container>
    );
}
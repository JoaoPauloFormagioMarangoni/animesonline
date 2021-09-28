import Modal from 'react-modal';
import { ButtonClose, Container } from './styles';

import { FaHeart } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { BsFillCaretRightFill } from 'react-icons/bs';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../contexts/auth';
import { useAnimes } from '../../contexts/animes';
import { useEffect, useState } from 'react';

interface PropsModal {
    modalIsOpen: boolean;
    closeModal: () => void;
    idAnimeNow: string;
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

export default function ModalAnime({ modalIsOpen, closeModal, idAnimeNow }: PropsModal) {
    const { signed, favorite, user } = useAuth();
    const { newEpisodes } = useAnimes();
    const [idAnime, setIdAnime] = useState<number>(1)
    const [anime, setAnime] = useState<AnimeProps>()

    useEffect(() => {
        const animeData = newEpisodes.filter(anime => anime.id === idAnimeNow);

        setAnime(animeData[0])
        setIdAnime(Number(idAnimeNow))
    }, [idAnimeNow, newEpisodes])

    function handleChangeAnimeNext() {
        if (idAnime < 6) {
            setIdAnime(idAnime + 1)
        }
    }

    function handleChangeAnimePrevious() {
        if (idAnime - 1 > 0) {
            setIdAnime(idAnime - 1)
        }
    }

    useEffect(() => {
        const animeDataWithId = newEpisodes.filter(anime => anime.id === String(idAnime));
        setAnime(animeDataWithId[0])
    }, [idAnime, newEpisodes])

    const handleFavorite = () => {
        if (signed) {
            favorite()
        } else {
            toast.error('Login to select', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                theme: "dark",
                closeOnClick: true,
                closeButton: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <ButtonClose
                type="button"
                onClick={closeModal}
                className="react-modal-close"
            >
                <CgClose className="closeModal" />
            </ButtonClose>

            <Container>
                <div>
                    <div>
                        <img
                            src={anime?.attributes.posterImage.original}
                            alt={anime?.attributes.canonicalTitle}
                            title={anime?.attributes.canonicalTitle}
                        />
                        <div>
                            <div>
                                <h2>{anime?.attributes.canonicalTitle}</h2>
                                <h6>Episodes: {anime?.attributes.episodeCount}</h6>
                                <h6>Status: {anime?.attributes.status}</h6>
                                <h6>Created at: {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(anime ? anime?.attributes.createdAt : '02-09-1999')
                                )}
                                </h6>
                                <h6>Updated at: {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(anime ? anime?.attributes.updatedAt : '02-09-1999')
                                )}
                                </h6>
                                <h6>Favorites: {user?.favorite ? '1' : '0'}</h6>
                            </div>
                            <ToastContainer />
                            <button className={signed ? '' : 'isNotSigned'} onClick={handleFavorite}>
                                Favorite
                                <FaHeart className={user?.favorite ? "heart favorites" : "heart"} />
                            </button>
                        </div>
                    </div>
                    <p>
                        {anime?.attributes.description}
                    </p>
                </div>
                <ul>
                    <li>ep1</li>
                    <li>ep2</li>
                    <li>ep3</li>
                    <li>ep1</li>
                    <li>ep2</li>
                    <li>ep3</li>
                    <li>ep1</li>
                    <li>ep2</li>
                    <li>ep3</li>
                    <li>ep1</li>
                    <li>ep2</li>
                    <li>ep3</li>
                </ul>

                <button onClick={handleChangeAnimeNext} className="next"><BsFillCaretRightFill className="arrowRight" /></button>
                <button onClick={handleChangeAnimePrevious} className="previous"><BsFillCaretRightFill className="arrowLeft" /></button>
            </Container>
        </Modal>
    );
}
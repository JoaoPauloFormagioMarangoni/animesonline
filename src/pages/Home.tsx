import { useState } from "react";
import { HeaderHome } from "../components/HeaderHome";
import { Highlights } from "../components/Highlights";
import ModalAnime from "../components/ModalAnime";
import { NewEpisodes } from "../components/NewEpisodes";
import { Container } from "../styles/homeStyle";
import Modal from 'react-modal';
import { Footer } from "../components/Footer";

Modal.setAppElement('#root');

export default function Home() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [idAnime, setIdAnime] = useState('')

    function handleOpenModal(idAnime: string) {
        setIsOpen(true);
        setIdAnime(idAnime)
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Container>
                <HeaderHome />
                <Highlights
                    openModal={handleOpenModal}
                />
            </Container>
            <NewEpisodes />
            <Footer />
            <ModalAnime
                modalIsOpen={modalIsOpen}
                closeModal={handleCloseModal}
                idAnimeNow={idAnime}
            />
        </>
    );
}
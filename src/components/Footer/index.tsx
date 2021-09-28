import LogoImg from '../../assets/logo.svg';
import { FaTwitch, FaYoutube, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <img src={LogoImg} alt="" />
            <div>
                <a href="https://www.instagram.com/_joaopaulo.fm/" rel="noreferrer" target="_blank">
                    <FaInstagram className="instagram" />
                </a>
                <a href="https://www.facebook.com/joaopaulo.marangoni.9/" rel="noreferrer" target="_blank">
                    <FaFacebookSquare className="facebook" />
                </a>
                <a href="https://www.twitch.tv/flap_hoel" rel="noreferrer" target="_blank">
                    <FaTwitch className="twitch" />
                </a>
                <a href="https://www.youtube.com/channel/UCXMUVmR-z6xW3MlUVkEpCuA" rel="noreferrer" target="_blank">
                    <FaYoutube className="youtube" />
                </a>
            </div>
            <span>&copy;2021 | João Paulo Formagio Marangoni</span>
        </Container>
    );
}
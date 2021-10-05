import { Container } from "./styles";
import { FaTwitch, FaYoutube, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

export function SocialMedia() {
    return (
        <Container>
            <a
              href="https://www.instagram.com/_joaopaulo.fm/"
              className="instagram"
              rel="noreferrer"
              target="_blank"
            >
                <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/joaopaulo.marangoni.9/"
              className="facebook"
              rel="noreferrer"
              target="_blank"
            >
                <FaFacebookSquare />
            </a>
            <a
              href="https://www.twitch.tv/flap_hoel"
              className="twitch"
              rel="noreferrer"
              target="_blank"
            >
                <FaTwitch />
            </a>
            <a
              href="https://www.youtube.com/channel/UCXMUVmR-z6xW3MlUVkEpCuA"
              className="youtube" 
              rel="noreferrer"
              target="_blank"
            >
                <FaYoutube />
            </a>
        </Container>
    );
}
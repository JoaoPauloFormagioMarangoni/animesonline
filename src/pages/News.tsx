import { Footer } from "../components/Footer";
import { HeaderHome } from "../components/HeaderHome";
import { NewsAnimes } from "../components/NewsAnimes";
import { SocialMedia } from "../components/SocialMedia";

export default function News() {
    return (
        <>
            <SocialMedia />
            <HeaderHome />
            <NewsAnimes />
            <Footer />
        </>
    );
}
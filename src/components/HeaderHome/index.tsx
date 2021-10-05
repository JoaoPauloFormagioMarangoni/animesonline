import { Link, useHistory, useLocation } from "react-router-dom";
import { AnimeList, Container } from "./styles";
import LogoImg from '../../assets/logo.svg';
import Avatar from '../../assets/avatar.png';

import { BiSearchAlt } from 'react-icons/bi';
import { RiMenuUnfoldFill, RiMenuFoldFill } from 'react-icons/ri';
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";

interface AnimeProps {
    attributes: {
        id: string;
        canonicalTitle: string;
        posterImage: ImagesProps;
    }
}

interface ImagesProps {
    original: string;
    small: string;
}

export function HeaderHome() {
    const { signed, isSignOut, user } = useAuth();
    const [text, setText] = useState('');
    const [infoAnime, setInfoAnime] = useState<AnimeProps[]>([]);
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    useEffect(() => {
        if (text) {
            fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
                .then(response => response.json())
                .then(response => setInfoAnime(response.data))
        }
    }, [text])

    const location = useLocation();
    let history = useHistory()

    function handleSignOut() {
        isSignOut()
        history.push('/signIn')
    }

    return (
        <>
            <Container>
                <button onClick={() => setIsActiveMenu(!isActiveMenu)}>
                    {isActiveMenu ? (
                        <RiMenuFoldFill className="menuOpen" />
                    ) : (
                        <RiMenuUnfoldFill className="menuOpen" />
                    )}
                </button>

                {isActiveMenu && (
                    <div>

                    </div>
                )}

                <Link to="/">
                    <img className="logoCenter" src={LogoImg} alt="Animes Online" />
                </Link>
                <div className={isActiveMenu ? "menuIsOpen" : ""}>
                    <nav>
                        <Link
                            to="/"
                            className={location.pathname === '/' ? 'selected' : ''}
                        >
                            Home
                        </Link>
                        <Link
                            to="/news"
                            className={location.pathname === '/news' ? 'selected' : ''}
                        >
                            News
                        </Link>
                        <Link
                            to="/categories"
                            className={location.pathname === '/categories' ? 'selected' : ''}
                        >
                            Categories
                        </Link>
                        <Link
                            to="/donation"
                            className={location.pathname === '/donation' ? 'selected' : ''}
                        >
                            Donation
                        </Link>
                    </nav>
                    <div className="containerSearch">
                        <BiSearchAlt className="iconSearch" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>

                    {signed ? (
                        <div className="logoutButton">
                            <button type="button" onClick={handleSignOut} className="firstButton">Sign out</button>
                            <img className="avatar" src={Avatar} alt="Avatar" title={user?.name} />
                        </div>
                    ) : (
                        <div className="logoutButton">
                            <Link to="/signUp">
                                <button type="button" className="firstButton">Sign up</button>
                            </Link>
                            <Link to="/signIn">
                                <button type="button">Sign in</button>
                            </Link>
                        </div>
                    )}
                </div>
            </Container>
            {(infoAnime && text) && (
                <AnimeList>
                    <ul>
                        {infoAnime.map(anime => (
                            <li key={anime.attributes.id}>
                                <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                <h2>{anime.attributes.canonicalTitle}</h2>
                            </li>
                        ))}
                    </ul>
                </AnimeList>
            )}
        </>
    );
}
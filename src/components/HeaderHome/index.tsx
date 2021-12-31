import { Link, useHistory, useLocation } from 'react-router-dom'
import { AnimeList, Container } from './styles'
import LogoImg from '../../assets/logo.svg'
import Avatar from '../../assets/avatar.png'

import { BiSearchAlt } from 'react-icons/bi'
import { ImMenu3, ImMenu4 } from 'react-icons/im'
import { useAuth } from '../../contexts/auth'
import { useEffect, useState } from 'react'

interface AnimeProps {
  attributes: {
    id: string
    canonicalTitle: string
    posterImage: ImagesProps
  }
}

interface ImagesProps {
  original: string
  small: string
}

export function HeaderHome() {
  const { signed, isSignOut, user } = useAuth()
  const [text, setText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [infoAnime, setInfoAnime] = useState<AnimeProps[]>([])

  useEffect(() => {
    if (text) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => setInfoAnime(response.data))
    }
  }, [text])

  const location = useLocation()
  let history = useHistory()

  function handleSignOut() {
    isSignOut()
    history.push('/signIn')
  }

  return (
    <>
      <Container>
        <Link to="/">
          <img src={LogoImg} alt="Animes Online" />
        </Link>
        <div className={isOpen ? 'open' : ''}>
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
            <>
              <button
                type="button"
                onClick={handleSignOut}
                className="firstButton"
              >
                Sign out
              </button>
              <img
                className="avatar"
                src={Avatar}
                alt="Avatar"
                title={user?.name}
              />
            </>
          ) : (
            <>
              <Link to="/signUp">
                <button type="button" className="firstButton">
                  Sign up
                </button>
              </Link>
              <Link to="/signIn">
                <button type="button">Sign in</button>
              </Link>
            </>
          )}
        </div>

        {isOpen ? (
          <ImMenu4 className="menuOpened" onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <ImMenu3 className="menuClosed" onClick={() => setIsOpen(!isOpen)} />
        )}
      </Container>
      {infoAnime && text && (
        <AnimeList>
          <ul>
            {infoAnime.map((anime) => (
              <li key={anime.attributes.id}>
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                />
                <h2>{anime.attributes.canonicalTitle}</h2>
              </li>
            ))}
          </ul>
        </AnimeList>
      )}
    </>
  )
}

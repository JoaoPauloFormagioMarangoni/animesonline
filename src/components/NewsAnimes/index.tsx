import { useAnimesNews } from "../../contexts/animeNews";
import { Container } from "./styles";

export function NewsAnimes() {
    const { animeNewsData } = useAnimesNews();

    return (
        <Container>
            <div>
                {animeNewsData.map(anime => (
                    <div key={anime.id}>
                        <img src={anime.banner} alt={anime.title} />
                        <div>
                            <span>{anime.category}</span>
                            <h2>{anime.title}</h2>
                            <span>{anime.createdAt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
import { useEffect, useState } from "react";

import { getGames } from "../data/games/games.js";
import Games from "../components/games/Games.jsx";

function GamesPage() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function loadGames() {

            try {

                const data = await getGames();

                setGames(data);

            }
            catch (err) {

                console.error(err);

                setError(err);

            }
            finally {

                setLoading(false);

            }

        }

        loadGames();

    }, []);


    if (loading) {
        return <div>Loading games...</div>;
    }


    if (error) {
        return <div>Couldn't load games.</div>;
    }


    if (games.length === 0) {
        return <div>No games available.</div>;
    }


    return (
        <main>

            <section className="page-hero">

                <div className="container page-hero-grid">

                    <div className="reveal">

                        <div className="eyebrow">
                            Play & Enjoy
                        </div>

                        <h1 className="section-title serif">
                            Games
                        </h1>

                        <p className="lead">
                            Challenge yourself with interactive games
                            created around language, creativity and
                            critical thinking.
                        </p>

                    </div>

                    <img
                        className="decor reveal"
                        src="/assets/images/leaf-purple.png"
                        alt="Decorative leaf"
                    />

                </div>

            </section> 


            <Games
                games={games}
            />

        </main>
    );
}

export default GamesPage;
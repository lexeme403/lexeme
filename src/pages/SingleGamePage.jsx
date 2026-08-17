import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getGame } from "../data/games/games.js";

import SingleGame from "../components/games/SingleGame.jsx";


function SingleGamePage() {

    const { id } = useParams();

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadGame() {

            try {

                const data = await getGame(id);

                setGame(data);

            }
            catch (err) {

                console.error(err);

            }
            finally {

                setLoading(false);

            }

        }

        loadGame();

    }, [id]);


    if (loading) {
        return <div>Loading game...</div>;
    }


    if (!game) {
        return <div>Game not found.</div>;
    }


    return (
        <section className="hero section">
            <div className="container  hero-copy reveal">

                <SingleGame
                    game={game}
                />

                <Link
                    className="card-link"
                    to={`/games`}
                >
                    <h3>Explore more games →</h3>
                </Link>

            </div>
        </section>
    );
}


export default SingleGamePage;
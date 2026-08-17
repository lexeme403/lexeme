import { Link } from "react-router-dom";

function Games({ games }) {

    return (
        <section className="section issues-section">

            <div className="container">

                <div className="eyebrow">
                    Interactive collection
                </div>

                <h2 className="section-title serif">
                    Games
                </h2>


                <div className="cards">

                    {games.map(game => (

                        <article
                            className="issue-card reveal"
                            key={game.gameID}
                        >

                            <div className="issue-card-media">

                                <div className="game-card-icon">
                                    🎮
                                </div>

                            </div>


                            <div className="issue-card-body">

                                <div className="eyebrow">
                                   Issue No. {game.issueID} ~ Game
                                </div>

                                <h3>
                                    {game.gameTitle}
                                </h3>

                                <p className="muted">
                                    Created by {game.gameCreator}
                                </p>


                                <Link
                                    className="btn btn-primary"
                                    to={`/games/${game.gameID}`}
                                >
                                    Play →
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}


export default Games;
import { Link } from "react-router-dom";

function HeroIssue({ issue }) {
    if (!issue) {
        return null;
    }

    return (
        <section className="container hero-grid" id="latestIssueContainer">

            <div className="hero-copy reveal">

                <div className="eyebrow">
                    Latest publication
                </div>

                <h1 className="hero-title serif">
                    {issue.season} issue
                </h1>

                <p className="lead">
                    {issue.intro} — all in one issue.
                </p>

                <div className="button-row">

                    <Link
                        className="btn btn-primary"
                        to={`/issues/${issue.issueNo}`}
                    >
                        Read more
                    </Link>

                    <Link
                        className="btn btn-outline"
                        to="/issues"
                    >
                        All issues
                    </Link>

                </div>

            </div>

            <div className="hero-cover reveal">

                <img
                    src={`assets/images/issues/${issue.issueCover}`}
                    alt={`Lexeme ${issue.season} cover`}
                />

            </div>

        </section>
    );
}

export default HeroIssue;
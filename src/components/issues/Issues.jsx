import { Link } from "react-router-dom";

function Issues({ issues }) {

    return (
        <section className="section issues-section" id="issues">
            <div className="container">
                <div className="eyebrow">Quarterly collection</div>
                <h2 className="section-title serif">Issues</h2>
                <div className="cards" id="issuesContainer">

                    {issues.map(issue => (

                        <article
                            className="issue-card reveal"
                            key={issue.issueNo}
                        >

                            <Link to={`/issues/${issue.issueNo}`}>

                                <div className="issue-card-media">

                                    <img
                                        src={`${import.meta.env.BASE_URL}assets/images/issues/${issue.issueThumbnail}`}
                                        alt={`${issue.season} cover`}
                                    />

                                </div>

                                <div className="issue-card-body">

                                    <div className="eyebrow">
                                        Issue No. {issue.issueNo}
                                    </div>

                                    <h3>
                                        {issue.season}
                                    </h3>

                                    <p className="muted">
                                        {issue.intro}
                                    </p>

                                    <span className="card-link">
                                        Explore issue →
                                    </span>

                                </div>

                            </Link>

                        </article>

                    ))}

                </div>
            </div>
        </section>
    );
}

export default Issues;
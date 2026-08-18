function SingleIssue({ issue }) {

    if (!issue) {
        return null;
    }

    return (
        <>
            <div>
                <section className="issue-detail-hero">
                    <div className="container issue-detail-grid">
                        <div className="detail-cover reveal" id="issueCoverContainer">
                            <img
                                src={`assets/images/${issue.issueNo}/${issue.issueCover}`}
                                alt={`Lexeme ${issue.season} magazine cover`}
                            />
                        </div>
                        <div className="reveal" id="issueInfoContainer">
                            <div className="eyebrow">
                                Issue No. {issue.issueNo}
                            </div>
                            <h1 className="section-title serif">
                                {issue.season}
                            </h1>
                            <p className="lead">
                                Cultural and educational Journal
                            </p>
                            <div className="meta">

                                <span className="pill">
                                    {issue.pages} pages
                                </span>
                                <span className="pill">
                                    English
                                </span>

                                <span className="pill">
                                    Quarterly issue
                                </span>

                            </div>

                            <p>
                                Lexeme is a quarterly student Journal
                                created by the English Language Association
                                at the Faculty of Educational Sciences,
                                Farhangian University of Bushehr.
                            </p>

                            <div className="button-row">

                                <a
                                    className="btn btn-primary"
                                    href={issue.online}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read Online
                                </a>

                                <a
                                    className="btn btn-light"
                                    href={issue.download}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download PDF
                                </a>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="section inside">
                    <div className="container inside-grid">
                        <div className="inside-panel reveal">
                            <div className="eyebrow">Contents</div>
                            <h2 className="section-title serif">Inside this issue</h2>
                            <div id="issueAbstractContainer">
                                {issue.abstract}
                            </div>
                            <ul id="issueInsideContentContainer" className="inside-list">

                                {issue.insideList.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="reveal">
                            <img src="assets/images/leaf-blue.png" alt="Decorative botanical illustration" 
                            style={{"max-height":"520px",
                                "margin":"auto",
                                "object-fit":"contain"}}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SingleIssue;
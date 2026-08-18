function EntryPage() {
    return (
        <main className="entry-page">
            <div className="entry-content">
                <h1 className="entry-title">LEXEME</h1>
                <p className="entry-subtitle">where every word opens a world</p>
                <Link
                    className="btn btn-light"
                    to={`/home`}
                >
                   Start
                </Link>
            </div>
        </main>
    );
}

export default EntryPage;
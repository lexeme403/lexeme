function About() {
    return (
        <section className="section about" id="about">
            <div className="container about-grid">
                <div className="about-art reveal">
                    <img src="assets/images/about-art.png" alt="Purple literary collage" />
                </div>
                <div className="reveal">
                    <div className="eyebrow">About the Journal</div>
                    <h2 className="section-title serif">About LEXEME</h2>
                    <p>Lexeme is inspired by the linguistic term for a meaningful unit of language. The name reflects the Journal&apos;s linguistic, educational, and cultural identity.</p>
                    <p>It is a student-run quarterly publication created by the English Language Association at the Faculty of Educational Sciences, Farhangian University of Bushehr. The Journal gives students a space to share ideas, experiences and creativity through education, language, literature, culture, art and student life.</p>
                    <div className="features">
                        <div className="feature">
                            <img src="assets/images/book-icon.png" alt="" />
                            <strong>Student voices</strong>
                        </div>
                        <div className="feature">
                            <img src="assets/images/globe-icon.png" alt="" />
                            <strong>Culture & ideas</strong>
                        </div>
                        <div className="feature">
                            <img src="assets/images/open-book-icon.png" alt="" />
                            <strong>Learning & literature</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
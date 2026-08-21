function Contact() {
    return (
        <section className="section contact" id="contact">
            <div className="container contact-grid">
                <div className="reveal">
                    <div className="eyebrow">Get in touch</div>
                    <h2 className="section-title serif">Contact Us</h2>
                    <p className="lead">We’d love to hear from you. For questions, suggestions or contributions, reach out through the channels below.</p>
                    <div className="contact-list">
                        <a className="contact-item" href="mailto:lexemecfu@gmail.com"><span>@</span><span><strong>Email</strong><br />lexemecfu@gmail.com</span></a>
                        <a className="contact-item" href="https://t.me/LexemeCfuadmin" target="_blank" rel="noopener"><span className="contact-icon"><img src="assets/images/telegram.png" alt="" /></span><span><strong>Telegram Admin</strong><br />@LexemeCfuAdmin</span></a>
                        <a className="contact-item" href="https://t.me/LexemeCfu" target="_blank" rel="noopener"><span className="contact-icon"><img src="assets/images/telegram.png" alt="" /></span><span><strong>Telegram Channel</strong><br />@LexemeCfu</span></a>
                        <a className="contact-item" href="https://ble.ir/lexemecfu/" target="_blank" rel="noopener">
                            <span className="contact-icon contact-icon--bale"><img src="assets/images/bale.png" alt="" /></span>
                            <span><strong>Bale Channel</strong><br />@LexemeCfu</span>
                        </a>
                        <a className="contact-item" href="https://www.linkedin.com/in/fatemeh-salmanian/" target="_blank" rel="noopener">
                            <span className="contact-icon">in</span>
                            <span><strong>Web Developer</strong><br />Fatemeh Salmanian</span>
                        </a>
                    </div>
                </div>
                <div className="contact-art reveal">
                    <img src="assets/images/envelope.png" alt="Envelope with lavender" />
                </div>
            </div>
        </section>
    );
}

export default Contact;
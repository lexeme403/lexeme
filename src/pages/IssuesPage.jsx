import { useEffect, useState } from "react";

import { getIssues } from "../data/issues.js";

import Issues from "../components/issues/Issues.jsx";

function IssuesPage() {
    const [issues, setIssues] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
    
        useEffect(() => {
    
            async function loadIssues() {
    
                try {
    
                    const data = await getIssues();
    
                    setIssues(data);
    
                }
                catch (err) {
    
                    console.error(err);
    
                    setError(err);
    
                }
                finally {
    
                    setLoading(false);
    
                }
    
            }
    
            loadIssues();
    
        }, []);
    
    
        if (loading) {
            return <div>Loading issues...</div>;
        }
    
    
        if (error) {
            return <div>Couldn't load issues.</div>;
        }
    
    
        if (issues.length === 0) {
            return <div>No issues available.</div>;
        }

    return (
        <main>
            <section className="page-hero">
                <div className="container page-hero-grid">
                    <div className="reveal">
                        <div className="eyebrow">Archive</div>
                        <h1 className="section-title serif">Issues</h1>
                        <p className="lead">Educational, literary and general-interest writing created around learning, language, culture and creativity.</p>
                    </div>
                    <img className="decor reveal" src="/assets/images/leaf-purple.png" alt="Decorative leaf" />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-copy reveal">
                            <h2 className="serif">What you’ll find</h2>
                            <p>The educational section explores teaching philosophy, educational psychology, language learning, artificial intelligence, resilience and the influence of legends. Literature introduces movements, student poetry and mythology. General-interest writing reflects on culture, nature, time, identity, memory and the human experience.</p>
                        </div>
                        <div className="overview-copy reveal">
                            <h2 className="serif">Made by students</h2>
                            <p>Each issue brings together critical perspectives and imaginative expression. The result is a blend of learning, creativity and thoughtful exploration shaped by student voices.</p>
                        </div>
                    </div></div></section>
                    <Issues
                        issues={issues}
                    />
                
            
        </main>
    );
}

export default IssuesPage;
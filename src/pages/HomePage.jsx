import { useEffect, useState } from "react";

import { getIssues } from "../data/issues.js";

import HeroIssue from "../components/issues/HeroIssue.jsx";
import Issues from "../components/issues/Issues.jsx";

function HomePage() {

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
        <>
            <main id="home">
                <section className="hero section">
                    <HeroIssue
                        issue={issues[0]}
                    />
                </section>
                <Issues
                    issues={issues}
                />
                {/* <About />
                <Contact /> */}
                
            </main>
        </>

    );
}

export default HomePage;
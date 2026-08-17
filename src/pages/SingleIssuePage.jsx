import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getIssue, getIssues } from "../data/issues.js";

import SingleIssue from "../components/issues/SingleIssue.jsx";
import Issues from "../components/issues/Issues.jsx";


function SingleIssuePage() {

    const { id } = useParams();

    const [issue, setIssue] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadIssue() {

            try {

                const data = await getIssue(id);

                setIssue(data);

            }
            catch (err) {

                console.error(err);

            }
            finally {

                setLoading(false);

            }

        }

        loadIssue();

    }, [id]);

     const [issues, setIssues] = useState([]);
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
        return <div>Loading issue...</div>;
    }


    if (!issue) {
        return <div>Issue not found.</div>;
    }


    return (
        <div>
            <SingleIssue
                issue={issue}
            />

            <Issues
                issues={issues}
            />
        </div>
    );
}

export default SingleIssuePage;
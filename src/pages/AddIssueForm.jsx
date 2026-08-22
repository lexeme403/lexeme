import { useEffect, useState } from "react";
import { getIssues } from "../data/issues.js";
import "../styling/AddIssueForm.css";

function AddIssueForm() {
    const [issueNo, setIssueNo] = useState("");
    const [season, setSeason] = useState("");
    const [pages, setPages] = useState("");
    const [issueThumbnail, setIssueThumbnail] = useState("");
    const [issueCover, setIssueCover] = useState("");
    const [download, setDownload] = useState("");
    const [online, setOnline] = useState("");
    const [intro, setIntro] = useState("");
    const [abstract, setAbstract] = useState("");

    const [insideList, setInsideList] = useState([
        "",
        "",
        "",
        ""
    ]);

    const [issuesOldContent, setIssuesOldContent] = useState([]);
    const [result, setResult] = useState("");

    useEffect(() => {
        async function loadNextIssueNo() {
            try {
                let issues = await getIssues();
                //issues = 
                setIssuesOldContent([...issues].sort(
                    (a, b) => a.issueNo - b.issueNo
                ));

                if (issues.length === 0) {
                    setIssueNo(1);
                    return;
                }

                const nextIssueNo =
                    Math.max(...issues.map(issue => issue.issueNo)) + 1;

                setIssueNo(nextIssueNo);
            } catch (error) {
                console.error("Couldn't load issues:", error);
            }
        }

        loadNextIssueNo();
    }, []);

    function addListItem() {
        setInsideList(prev => [...prev, ""]);
    }

    function removeListItem(index) {
        setInsideList(prev =>
            prev.filter((_, i) => i !== index)
        );
    }

    function updateListItem(index, value) {
        setInsideList(prev =>
            prev.map((item, i) =>
                i === index ? value : item
            )
        );
    }

    function generateJSON() {
        const filteredInsideList = insideList
            .map(item => item.trim())
            .filter(item => item !== "");

        const issue = {
            issueNo: Number(issueNo),
            season: season,
            pages: Number(pages),
            issueThumbnail: issueThumbnail,
            issueCover: issueCover,
            download: download,
            online: online,
            intro: intro,
            abstract: abstract,
            insideList: filteredInsideList
        };

        const newIssues = [
            ...issuesOldContent,
            issue
        ];

        setResult(
            JSON.stringify(newIssues, null, 4)
        );
    }

    async function copyJSON() {
        try {
            await navigator.clipboard.writeText(result);
            alert("JSON copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy JSON:", error);
            alert("Couldn't copy JSON.");
        }
    }

    return (
        <main className="add-issue-page">

            <div className="add-issue-container">

                <h1>Add New Issue</h1>

                <h2 className="form-group">
                    <label htmlFor="issueNo">
                        Issue No {issueNo}
                    </label>
                </h2>

                <div className="form-group">
                    <label htmlFor="season">
                        Publishing Season
                    </label>

                    <input
                        id="season"
                        type="text"
                        placeholder="Spring 2026"
                        value={season}
                        onChange={e =>
                            setSeason(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="pages">
                        Pages Count
                    </label>

                    <input
                        id="pages"
                        type="number"
                        placeholder="40"
                        value={pages}
                        onChange={e =>
                            setPages(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="issueThumbnail">
                        Issue Thumbnail
                    </label>

                    <input
                        id="issueThumbnail"
                        type="text"
                        placeholder="4-1.png"
                        value={issueThumbnail}
                        onChange={e =>
                            setIssueThumbnail(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="issueCover">
                        Issue Cover
                    </label>

                    <input
                        id="issueCover"
                        type="text"
                        placeholder="4-2.png"
                        value={issueCover}
                        onChange={e =>
                            setIssueCover(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="download">
                        Download Link
                    </label>

                    <input
                        id="download"
                        type="url"
                        value={download}
                        onChange={e =>
                            setDownload(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="online">
                        Read Online Link
                    </label>

                    <input
                        id="online"
                        type="url"
                        value={online}
                        onChange={e =>
                            setOnline(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="intro">
                        Introduction
                    </label>

                    <textarea
                        id="intro"
                        rows="4"
                        value={intro}
                        onChange={e =>
                            setIntro(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="abstract">
                        Abstract
                    </label>

                    <textarea
                        id="abstract"
                        rows="6"
                        value={abstract}
                        onChange={e =>
                            setAbstract(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">

                    <label>
                        Inside List
                    </label>

                    <div className="inside-list-container">

                        {insideList.map((item, index) => (
                            <div
                                className="inside-list-item"
                                key={index}
                            >
                                <input
                                    type="text"
                                    placeholder="List item..."
                                    value={item}
                                    onChange={e =>
                                        updateListItem(
                                            index,
                                            e.target.value
                                        )
                                    }
                                />

                                <button
                                    type="button"
                                    className="remove-list-button"
                                    onClick={() =>
                                        removeListItem(index)
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                    </div>

                    <button
                        type="button"
                        className="add-list-button"
                        onClick={addListItem}
                    >
                        + Add List Item
                    </button>

                </div>

                <button
                    type="button"
                    className="generate-button"
                    onClick={generateJSON}
                >
                    Generate JSON
                </button>

                {result && (
                    <div className="generated-result">

                        <h2>
                            Generated JSON
                        </h2>

                        <p>
                            Delete all contents of
                            <code> issues.json </code>
                            and copy and paste this JSON into it.
                        </p>

                        <button
                            type="button"
                            className="copy-json-button"
                            onClick={copyJSON}
                        >
                            Copy JSON
                        </button>

                        <pre>
                            {result}
                        </pre>

                    </div>
                )}

            </div>

        </main>
    );
}

export default AddIssueForm;
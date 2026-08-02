async function renderIssues(page) {
    try {
        const response = await fetch("./issues.json");
        if (!response.ok)
            throw new Error("Couldn't load issues.");

        const issues = await response.json();
        issues.sort((a, b) => b.issueNo - a.issueNo);
        if (issues.length > 0) {
            if (page === "home")
                renderHeroIssue(issues[0]);
            else if (page === "singleIssue") {
                const issueNo = getCurrentIssueNo();
                const issue = issues.find(i => i.issueNo === issueNo);
                if (!issue) {
                    console.error("Issue not found.");
                    return;
                }
                renderSingleIssue(issue);
            }
            renderAllIssues(issues)
        }
    }
    catch (err) {
        console.error(err);
    }
}
function renderSingleIssue(issue) {
    let container = document.getElementById("issueCoverContainer");
    container.innerHTML = `<img src="assets/images/${issue.issueNo}/${issue.issueCover}" alt="Lexeme ${issue.season} magazine cover">`

    container = document.getElementById("issueInfoContainer");
    container.innerHTML = `<div class="eyebrow">Issue No. ${issue.issueNo}</div>
                    <h1 class="section-title serif">${issue.season}</h1>
                    <p class="lead">Cultural and educational Journal</p>
                    <div class="meta">
                        <span class="pill">${issue.pages} pages</span>
                        <span class="pill">English</span>
                        <span class="pill">Quarterly issue</span>
                    </div>
                    <p>Lexeme is a quarterly student Journal created by the English Language Association at the Faculty
                        of Educational Sciences, Farhangian University of Bushehr.</p>
                    <div class="button-row">
                        <a class="btn btn-primary"
                            href="${issue.online}"
                            target="_blank" rel="noopener">Read Online</a>
                        <a class="btn btn-light" href="${issue.download}" target="_blank"
                            rel="noopener">Download PDF</a>
                    </div>`

    container = document.getElementById("issueAbstractContainer");
    container.innerHTML = `${issue.abstract}`

    const list = document.getElementById("issueInsideContentContainer");
    list.replaceChildren();
    issue.insideList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function renderHeroIssue(issue) {
    const container = document.getElementById("latestIssueContainer");
    container.innerHTML = `
            <div class="hero-copy reveal">
                        <div class="eyebrow">Latest publication</div>
                        <h1 class="hero-title serif">${issue.season} issue</h1>
                        <p class="lead">${issue.intro} —all in one issue.</p>
                        <div class="button-row">
                            <a class="btn btn-primary" href="issue.html?issue=${issue.issueNo}">Read more</a>
                            <a class="btn btn-outline" href="issues.html">All issues</a>
                        </div>
                    </div>
                    <div class="hero-cover reveal">
                        <img src="assets/images/${issue.issueNo}/${issue.issueCover}" alt="Lexeme ${issue.season} cover">
                    </div>
        `
}

function renderAllIssues(issues) {
    const container = document.getElementById("issuesContainer");
    container.innerHTML = "";
    issues.forEach(issue => {
        container.innerHTML += `
            <article class="issue-card reveal">
                <a href="issue.html?issue=${issue.issueNo}"><div class="issue-card-media">
                <img src="assets/images/${issue.issueNo}/${issue.issueThumbnail}" alt="${issue.season} cover">
                </div><div class="issue-card-body">
                    <div class="eyebrow">Issue No. ${issue.issueNo}</div>
                    <h3>${issue.season}</h3>
                    <p class="muted">${issue.intro}</p>
                    <span class="card-link">Explore issue →</span>
                </div></a>
            </article>
        `;
    });
}

function getCurrentIssueNo() {
    const params = new URLSearchParams(window.location.search);
    const issueNo = Number(params.get("issue"));
    return issueNo;
}
import issues from "./issues.json";

export async function getIssues() {
    return [...issues].sort(
        (a, b) => b.issueNo - a.issueNo
    );
}

export async function getIssue(issueNo) {
    const issues = await getIssues();

    return issues.find(
        issue => issue.issueNo === Number(issueNo)
    );
}
import React from "react";
import IRepository from "../interfaces/IRepository";
import '../css/repo.css'


const RepoComponent: React.FC<IRepository> = (repo) => {
    return (
        <div className="repo-card">
            <h3 className="repo-name">{repo.name.replace(/-/g, ' ')}</h3>
            <p className="repo-desc">{repo.description}</p>
            <a className={`repo-link ${repo.archived ? 'archived' : ''}`} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Source code!
            </a>
        </div>
    );
};

export default RepoComponent;

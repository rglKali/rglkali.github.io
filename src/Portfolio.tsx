import React, { useEffect, useState } from 'react';
import RepoComponent from './components/Repo';
import IRepository from './interfaces/IRepository';
import './css/portfolio.css';

const MyPortfolio: React.FC = () => {
    const [repos, setRepos] = useState<IRepository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/rglKali/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => {
                console.error('Error fetching repositories:', error);
            });
    }, []);

    // Separate archived and non-archived repositories
    const activeRepos = repos.filter(repo => !repo.archived);
    const archiveRepos = repos.filter(repo => repo.archived);

    return (
        <div className="my-portfolio">
            <h1 className="portfolio-title">Github overview</h1>
            <div className="repo-list">
                <div className="active-list">
                    <h2 className="active-title">Repositories</h2>
                    {activeRepos.map(repo => (
                        <RepoComponent key={repo.id} {...repo} />
                    ))}
                </div>
                <div className="archive-list">
                    <h2 className="archive-title">Archives</h2>
                    {archiveRepos.map(repo => (
                        <RepoComponent key={repo.id} {...repo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;

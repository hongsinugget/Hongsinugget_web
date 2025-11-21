'use client';

import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects">
            <h2>Projects</h2>
            <p className="section-subtitle">
                작은 아이디어를 의미 있는 프로젝트로.<br />
                디자인과 마케팅 경험을 바탕으로,<br />
                관심 있는 개발 분야까지 한 걸음씩 확장해가고 있어요.
            </p>

            <div className="filter-tabs" role="tablist" aria-label="프로젝트 필터">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
                    onClick={() => setFilter('design')}
                >
                    Design
                </button>
                <button
                    className={`filter-btn ${filter === 'dev' ? 'active' : ''}`}
                    onClick={() => setFilter('dev')}
                >
                    Dev
                </button>
                <button
                    className={`filter-btn ${filter === 'data' ? 'active' : ''}`}
                    onClick={() => setFilter('data')}
                >
                    Data
                </button>
            </div>

            <div className="project-grid">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

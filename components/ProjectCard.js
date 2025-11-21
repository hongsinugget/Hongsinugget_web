'use client';

export default function ProjectCard({ project, onClick }) {
    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <div className="project-image">
                <img src={project.thumbnail} alt={project.title} />
                <a className="view-more">View More →</a>
            </div>
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc" dangerouslySetInnerHTML={{ __html: project.shortDesc }}></p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

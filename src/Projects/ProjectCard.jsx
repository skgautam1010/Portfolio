import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl,
    techStack,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                {techStack && techStack.length > 0 && (
                        <div className='tech-stack'>
                            {techStack.map((tech) => (
                                <span key={tech} className='tech-tag'>{tech}</span>
                            ))}
                        </div>
                )}
                <a href={videoUrl} className='project-yt-link'>
                    Know More!
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
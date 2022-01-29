import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { projectsData } from './../assets/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                headings='My Projects.'
                details="Here are a few cool things I've worked on, do check them out!"
            />

            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )}
            </div>

            <Footer
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    );
};

export default Projects;
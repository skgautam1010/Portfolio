import React from 'react';
import './Skills.css';

const SkillCard = ({ skillName, skillUrl, altTag }) => {
    return (
        <div className='skill'>
            <img src={skillUrl} alt={altTag} />
            <p>{skillName}</p>
        </div>
    );
};

export default SkillCard;
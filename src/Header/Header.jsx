import React from 'react'
import './Header.css';


const Header = ({headings,details}) => {
    return (
        <div className="header-container">
            <h1>{headings}</h1>
            <h4>{details}</h4>
        </div>
    )
}


export default Header;
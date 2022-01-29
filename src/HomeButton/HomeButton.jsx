import React from 'react'
import homeiconwhite from "./../assets/home_white.png";
import homeiconblack from "./../assets/home_black.png";
import './HomeButton.css';
import {withRouter} from 'react-router-dom';

class HomeButton extends React.Component{
    
    
    navigateToHome = () => {
        const { history }= this.props;
        history.push('/');
    }
    
    render(){

        const {location} = this.props;
        const whitBtn=location.pathname === '/';

    return (
            <button className={`go-home-btn ${whitBtn ? 'white-bkg' : 'gradient-bkg'}`} onClick={this.navigateToHome}>
                <img 
                className="home-icon"   
                src={whitBtn ? homeiconblack : homeiconwhite }
                alt="home-icon"
                />
            </button>
    );
    }
}

export default withRouter(HomeButton);
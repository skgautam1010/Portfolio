import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import homeanimegif from "./../assets/home_anime.gif";
import myimg from "./../assets/sonu.jpg";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="header-text">
                    <h1> Welcome To My Portfolio!</h1>
                    <h4>This is Sonu Kumar Gautam, A Full Stack Developer</h4>
                    <img src={myimg} className="myimg" alt="MyImage" />
                </div>
                <div className="head-btns">
                    <a href="https://drive.google.com/file/d/1ijnEcg0uE_3Yeu7e2gAHxObUc3Mmq5du/view?usp=sharing" className="btn btn-white" 
                    >
                        <p className="btn-text">
                            Check Out My Resume
                        </p>
                    </a>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">
                            Connect With Me
                        </p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img className="home-anime" src={homeanimegif} alt="home-anime" />
                </div>
            </div>
        )
    }
}

export default Home;

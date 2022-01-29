import React from 'react'
import { HashRouter , Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import HomeButton from '../HomeButton/HomeButton';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import './Routes.css';

const Routes = () => {
    return (
        <div>
            <HashRouter>

            <div>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/contact" exact component={Contact} />
                <HomeButton />
            </div>

            </HashRouter>
        </div>
    )
}


export default Routes;
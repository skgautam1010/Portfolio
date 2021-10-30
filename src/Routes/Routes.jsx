import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import './Routes.css';

const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/contact" exact component={Contact} />
            </Switch>

        </BrowserRouter>
    )
}


export default Routes;
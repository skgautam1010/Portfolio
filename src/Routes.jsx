import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';


const Routes = () => {
    return (
        <BrowserRouter>

            <Switch>
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
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../styles/main.scss';
import Home from './home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={ Home }/>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));
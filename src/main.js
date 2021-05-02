import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../styles/main.scss';
import Home from './home';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' component={ Home }/>
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));
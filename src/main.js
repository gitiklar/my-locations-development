import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/home';
import NewCategory from './components/newCategory';
import CategoryList from './components/categoryList';
import NewLocation from './components/newLocation';
import RenameCategory from './components/renameCategory';
import store from './redux/store';
import '../styles/main.scss';


const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/category-list" component = {CategoryList}/>
                    <Route path="/" component = {Home}/>
                </Switch>
                <Route path="*/new-category" component = {NewCategory}/>
                <Route path="/category-list/rename-category" component = {RenameCategory}/>
                <Route path="/category-list/new-location" component = {NewLocation}/>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App/> , document.querySelector('main'));

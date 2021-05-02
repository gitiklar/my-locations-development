import React  from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

import logoImg from '../styles/images/logo.jpg';
import NewCategory from './components/newCategory';
import CategoryList from './components/categoryList';


const Home = () => {    
    return (
        <div className="homeContainer">
            <header id="header">
                <Row>
                    <Col span={8}><img src={logoImg} alt="logo" /></Col>
                    <Col span={8}><h1 className="titleText">My locations</h1></Col>
                    <Col span={8}></Col>
                </Row>
            </header>
            <div id="heading" >
                <div className="menuLine">
                    <Link to="/new-category">New category</Link>
                    <Link to="/category-list">Category-list</Link>               
                </div>
            </div>
            <section id="main" className="wrapper">
                <div className="inner">
                    <Switch>
                        <Route path="/new-category" component={NewCategory}/>
                        <Route path="/category-list" component={CategoryList}/>
                    </Switch>
                </div>
            </section>
        </div>
    );
};
export default Home;
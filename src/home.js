import React  from 'react';
import { Switch, Route , Link} from "react-router-dom";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

import logoImg from '../styles/images/logo.jpg';
import NewCategory from './components/newCategory';
import CategoryList from './components/categoryList';
import { useSelector } from 'react-redux';


const Home = () => {

    const currentTitle = useSelector(state=>state.titleReducer.currentTitle);

    return (
        <div className="homeContainer">
            <header id="header">
                <Row>
                    <Col span={8}><Link to="/"><img src={logoImg} alt="logo"/></Link></Col>
                    <Col span={8}><h1 className="titleText">My locations {currentTitle}</h1></Col>
                    <Col span={8}></Col>
                </Row>
            </header>
            <div id="heading" >
                <div className="menuLine">
                <Link to="/">Home</Link>
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
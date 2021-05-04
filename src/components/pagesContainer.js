import React  from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

import logoImg from '../../styles/images/logo.jpg';

const PagesContainer = ({children}) => {
    
    const currentTitle = useSelector(state=>state.titleReducer.currentTitle);
    const { pathname } = useLocation();

    return (
        <div className="pagesContainer">
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
                    <Link to="/category-list">Category-list</Link>     
                    <Link to={`${pathname!=="/" ? pathname:''}/new-category`}>New category</Link>
                </div>
            </div>
            <section id="main" className="wrapper">
                <div className="inner">
                    {children}
                </div>
            </section>
        </div>
    );
};
export default PagesContainer;
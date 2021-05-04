import { SmileOutlined } from '@ant-design/icons';
import React  from 'react';

import PagesContainer from './pagesContainer';

const Home = () => {
    return (
        <div className="homePage">
            <div className="innerHomePage">
                <div className="bannerContainer">
                    <h1> Wellcome to 'My locations' App </h1>
                    <h2> In our app you can manage a custom </h2>
                    <h2> list of categories and locations. </h2>
                    <h2> Feel free to try. </h2>
                    <h3> Hope you will enjoy <SmileOutlined/> </h3>
                </div>
            </div>
        </div>
    );
};
const HomeWithContainer = () => <PagesContainer><Home/></PagesContainer>;

export default HomeWithContainer;
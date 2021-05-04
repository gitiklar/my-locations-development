import React  from 'react';

import PagesContainer from './pagesContainer';

const Home = () => {
    return (
        <div className="banner">
            Hi home Page
        </div>
    );
};
const HomeWithContainer = () => <PagesContainer><Home/></PagesContainer>;

export default HomeWithContainer;
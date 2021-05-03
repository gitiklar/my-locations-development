import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route , Link} from "react-router-dom";
import { Tabs, Radio } from 'antd'; 
import AddLocationIcon from '@material-ui/icons/AddLocation';
import AddIcon from '@material-ui/icons/Add';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

import useTitle from './useTitle';
import NewLocation from './newLocation';
import LocationsTable from './locationsTable';

const CategoryList = () => {
    const categories = useSelector(state => state.categoriesReducer.categoriesArray);
    const categoriesList = categories.map(({name})=>name);
    const [ activeCategory , setActiveCategory ] = useState(categoriesList[0]);
    const locations = useSelector(state => state.locationsReducer.locationsArray);
    console.log('updateTable');
    const locationsList = locations.filter(({category})=>category===activeCategory);
    const locationsListWithKeys = locationsList.map((locationObj , index)=>{ return {...locationObj , key:index.toString()}});

    useTitle('- category list');

    const onTabChange = (activeTab) => {
        setActiveCategory(activeTab);
    }

    return (
      <div className="innerContainer">
        <Radio.Group className="topCategoryTab" onChange = {()=>{}} value="left">
          <AddIcon />
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition="left" onChange={onTabChange}>
            {categoriesList.map(item => <TabPane tab={item} key={item} >
                                    <div className="specificCategoryContent">
                                        <div className="specificCategoryContentTop">
                                                <Link to="/category-list/new-location"><AddLocationIcon/></Link>               
                                        </div>
                                        <div>
                                            <LocationsTable originData = {locationsListWithKeys}/>
                                        </div>
                                    </div>
                                </TabPane>)}   
         </Tabs>
         <Route path="/category-list/new-location" render={()=><NewLocation category={activeCategory}/>}/>
      </div>
    );
};

export default CategoryList;

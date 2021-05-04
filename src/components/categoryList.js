import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route , Link} from "react-router-dom";
import { Tabs , Tooltip, Button } from 'antd'; 
import { DeleteOutlined } from '@ant-design/icons';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

import useTitle from './useTitle';
import NewLocation from './newLocation';
import LocationsTable from './locationsTable';
import PagesContainer from './pagesContainer';
import { deleteCategory } from '../redux/actions';

const CategoryList = () => {
    const [ activeKey , setActiveKey ] = useState(null);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoriesReducer.categoriesArray);
    const locations = useSelector(state => state.locationsReducer.locationsArray);
    const categoriesList = categories.map(({name})=>name);
    const locationsList = locations.filter(({category})=>category===activeKey);
    const locationsListWithKeys = locationsList.map((locationObj , index)=>{ return {...locationObj , key:index.toString()}});
    useTitle('- category list');
    
    const deleteCategoryHandler = () => {
        const indexOfCurrentCategory = categories.findIndex(categoryObj=>categoryObj.name === activeKey);
        const indexOfCategoryAfterDeleted = categoriesList[indexOfCurrentCategory + 1] ? indexOfCurrentCategory + 1 : categoriesList[indexOfCurrentCategory - 1] ? indexOfCurrentCategory - 1 : 0;
        setActiveKey(categoriesList[indexOfCategoryAfterDeleted]);
        dispatch(deleteCategory(activeKey || categoriesList[0]));
    }

    const onActiveKeyChange = key => {
        setActiveKey(key);
    }
    
    return (
      <div className="innerContainer">
        <Tabs tabPosition="left" defaultActiveKey={categoriesList[0]} onChange={onActiveKeyChange}>
            {categoriesList.map(item => <TabPane tab={item} key={item}>
                                                <div className="specificCategoryContent">
                                                    <div className="specificCategoryContentTop">
                                                            <Link to="/category-list/new-location"><Tooltip placement="top" title="Add location"><AddLocationIcon style={{fontSize:'35px'}}/></Tooltip></Link>               
                                                            <Button onClick={deleteCategoryHandler} style={{backgroundColor:'transparent' , border:'none'}}><Tooltip placement="top" title="Delete category"><DeleteOutlined style={{fontSize:'25px'}}/></Tooltip></Button>
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

const CategoryListWithContainer = () => <PagesContainer><CategoryList/></PagesContainer>;

export default CategoryListWithContainer;

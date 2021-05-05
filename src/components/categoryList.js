import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route , Link} from "react-router-dom";
import { Tabs , Tooltip, Button, Empty } from 'antd'; 
import { DeleteOutlined } from '@ant-design/icons';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

import useTitle from '../customHooks/useTitle';
import NewLocation from './newLocation';
import PagesContainer from './pagesContainer';
import { deleteCategory, setActiveCategory } from '../redux/actions';
import RenameCategory from './renameCategory';
import renameIcon from '../../styles/images/renameIcon.png';
import LocationsEditableTable from './locationsEditableTable';

const CategoryList = () => {
    const dispatch = useDispatch();
    const activeCategory = useSelector(state => state.categoriesReducer.activeCategory);
    const categories = useSelector(state => state.categoriesReducer.categoriesArray);
    const categoriesList = categories.map(({name})=>name);

    useTitle('- category list');
    const deleteCategoryHandler = item => {
        const indexOfCurrentCategory = categories.findIndex(categoryObj => categoryObj.name === item);
        const indexOfCategoryAfterDeleted = categoriesList[indexOfCurrentCategory + 1] ? indexOfCurrentCategory + 1 : categoriesList[indexOfCurrentCategory - 1] ? indexOfCurrentCategory - 1 : 0;
        dispatch(deleteCategory(item));
        dispatch(setActiveCategory(categoriesList[indexOfCategoryAfterDeleted]));
    }

    const onActiveKeyChange = item => {
        dispatch(setActiveCategory(item));
    }

    return (
      <div className="innerContainer">
            {!categoriesList.length ? <div className="emptyImage"><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></div> : 
                    <Tabs tabPosition="left" activeKey={activeCategory} defaultActiveKey={activeCategory} onChange={onActiveKeyChange}>
                            {categoriesList.map(item => <TabPane tab={item} key={item}>
                                                            <div className="specificCategoryContent">
                                                                <div className="specificCategoryContentTop">
                                                                        <Link to="/category-list/new-location"><Tooltip placement="top" title="Add location"><AddLocationIcon style={{fontSize:'35px'}}/></Tooltip></Link>               
                                                                        <div className="renameAndDeleteIconsContainer">
                                                                            <Link to="/category-list/rename-category" style={{backgroundColor:'transparent' , border:'none'}}><Tooltip placement="top" title="Rename category"><img src={renameIcon} alt="rename icon"></img></Tooltip></Link>
                                                                            <Button onClick={()=>deleteCategoryHandler(item)} style={{backgroundColor:'transparent' , border:'none'}}><Tooltip placement="top" title="Delete category"><DeleteOutlined style={{fontSize:'25px'}}/></Tooltip></Button>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                    <LocationsEditableTable/>
                                                                </div>
                                                            </div>
                                                        </TabPane>)}   
                    </Tabs>
            }
            
            <Route path="/category-list/new-location" component = { NewLocation }/>
            <Route path="/category-list/rename-category" component = { RenameCategory }/>
      </div>
    );
};

const CategoryListWithContainer = () => <PagesContainer><CategoryList/></PagesContainer>;

export default CategoryListWithContainer;

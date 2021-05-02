import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import useTitle from './useTitle';

const CategoryList = () => {
    const [ selectedItem , setSelectedItem ] = useState('');
    const categories = useSelector(state=>state.categories);
    const items = categories.categoriesArray.map(({name})=>name);
    useTitle('- category list');

    return (
        <div className="categoryListContainer">
            <select className="form-select" size="3" className="custom-select" value={selectedItem} onChange={(e)=>setSelectedItem(e.target.value)}>
                {items.map(item => <option key={item} value={item}  style={{cursor:'pointer'}}>{item}</option>)}
            </select>
        </div>
    );
}

export default CategoryList;
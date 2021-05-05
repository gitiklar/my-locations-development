import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Form, Button, Input, Modal } from 'antd';

import { renameCategory, validateUniqueFieldInAnArray } from '../redux/actions';
import useTitle from '../customHooks/useTitle';

const RenameCategory = () => {
    const [newName , setNewName] = useState(null);
    const categories = useSelector(state => state.categoriesReducer);
    const activeCategory = useSelector(state => state.categoriesReducer.activeCategory);
    const history = useHistory();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const previousPath = pathname.slice(1 , pathname.lastIndexOf('/'));

    useTitle('- rename category' , previousPath ? `- ${previousPath}` : null);

    const items = categories.categoriesArray.map(({name}) => name);

    const handleOk = () => {
        dispatch(renameCategory(activeCategory ,newName));
        backToPreviousPath();
    }

    const backToPreviousPath = () => {
        history.push(pathname.slice(0 , pathname.lastIndexOf('/')));
    }

    const onInputHandler = (value) => {
        setNewName(value);
    }

    return (
        <div className="newCategoryContainer">
            <Modal visible={true} title="Rename Category" onCancel={backToPreviousPath} footer={[
                <Button form="newCategoryForm" key="submit" type="primary" htmlType="submit"> Save </Button>,
                <Button key="back" onClick={backToPreviousPath}> Cancel </Button>,]}>

                <Form id="newCategoryForm" onFinish={handleOk}  onInput={(e)=>onInputHandler(e.target.value)} name="basic">
                    <Form.Item label="Category name" name="categoryName"
                     rules={[{ required: true, message: `Please input new name instead of ${activeCategory}!`, }, 
                     ()=>validateUniqueFieldInAnArray(items),
                     ]}><Input placeholder={activeCategory}/>
                     </Form.Item>      
                </Form>
            </Modal>
        </div>
    );
}

export default RenameCategory;
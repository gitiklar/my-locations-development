import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Form , Button, Input, Modal } from 'antd';

import { saveNewCategory, validateUniqueFieldInAnArray } from '../redux/actions';
import useTitle from '../customHooks/useTitle';

const NewCategory = () => {
    const [categoryName , setCategoryName] = useState(null);
    const categories = useSelector(state => state.categoriesReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const previousPath = pathname.slice(1 , pathname.lastIndexOf('/'));

    useTitle('- new category' , previousPath ? `- ${previousPath}` : null);

    const items = categories.categoriesArray.map(({name}) => name);

    const handleOk = () => {
        dispatch(saveNewCategory(categoryName));
        backToPreviousPath();
    }

    const backToPreviousPath = () => {
        history.push(pathname.slice(0 , pathname.lastIndexOf('/')));
    }

    const onInputHandler = (value) => {
        setCategoryName(value);
    }

    return (
        <div className="newCategoryContainer">
            <Modal visible={true} title="New Category" onCancel={backToPreviousPath} footer={[
                <Button form="newCategoryForm" key="submit" type="primary" htmlType="submit"> Create </Button>,
                <Button key="back" onClick={backToPreviousPath}> Return </Button>,]}>

                <Form id="newCategoryForm" onFinish={handleOk}  onInput={(e)=>onInputHandler(e.target.value)} name="basic">
                    <Form.Item label="Category name" name="categoryName"
                         rules={[{ required: true, message: 'Please input new category!', }, ()=>validateUniqueFieldInAnArray(items),]}>
                        <Input />
                     </Form.Item>      
                </Form>
            </Modal>
        </div>
    );
}

export default NewCategory;
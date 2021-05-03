import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Form , Button, Input, Modal } from 'antd';

import { savNewCategory, validateUniqueFieldInAnArray } from '../redux/actions';
import useTitle from './useTitle';

const NewCategory = () => {
    const [categoryName , setCategoryName] = useState(null);
    const categories = useSelector(state => state.categoriesReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    useTitle('- new category');

    const items = categories.categoriesArray.map(({name}) => name);

    const handleOk = () => {
        dispatch(savNewCategory(categoryName));
        backToHome();
    }

    const backToHome = () => {
        history.push('/');
    }

    const onInputHandler = (value) => {
        setCategoryName(value);
    }

    return (
        <div className="newCategoryContainer">
            <Modal visible={true} title="New Category" onCancel={backToHome} footer={[
                <Button form="newCategoryForm" key="submit" type="primary" htmlType="submit"> Create </Button>,
                <Button key="back" onClick={backToHome}> Return </Button>,]}>

                <Form id="newCategoryForm" onFinish={handleOk}  onInput={(e)=>onInputHandler(e.target.value)} name="basic">
                    <Form.Item label="Category name" name="categoryName"
                     rules={[{ required: true, message: 'Please input new category!', }, 
                     ()=>validateUniqueFieldInAnArray(items),
                     ]}><Input />
                     </Form.Item>      
                </Form>
            </Modal>
        </div>
    );
}

export default NewCategory;
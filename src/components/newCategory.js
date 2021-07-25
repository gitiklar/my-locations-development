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
    let previousPath = pathname.slice(1 , pathname.lastIndexOf('/'));
    previousPath ? previousPath = `- ${previousPath}` : null;

    useTitle('- new category' , previousPath);

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
        <div className="newCandyContainer">
            <Modal visible={true} title="New Category" onCancel={backToPreviousPath} footer={[
                <Button form="newCandyForm" key="submit" type="primary" htmlType="submit"> Create </Button>,
                <Button key="back" onClick={backToPreviousPath}> Return </Button>,]}
            >

                <Form id="newCandyForm" onFinish={handleOk}  onInput={(e)=>onInputHandler(e.target.value)} name="basic">
                    <Form.Item name="Candy name" rules={[{ required: true, message: 'Please enter candy name!',},]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="candy name" />
                    </Form.Item>
                    <Form.Item name="Price" rules={[{ required: true, message: 'Please enter candy price!',},]}>
                        <Input prefix={<WalletOutlined/>} data-address={true} type="number" placeholder="candy price"/>
                    </Form.Item>
                    <Form.Item name="Image">
                        <Input  prefix={<WalletOutlined/>} data-address={true} placeholder="candy image"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default NewCategory;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Form , Button, Input, Modal } from 'antd';

import { saveNewLocation } from '../redux/actions';
import useTitle from '../customHooks/useTitle';

const NewLocation = () => {
    const activeCategory = useSelector(state => state.categoriesReducer.activeCategory);
    const history = useHistory();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const previousPath = pathname.slice(1 , pathname.lastIndexOf('/'));

    useTitle('- new location' , `- ${previousPath}`);

    const handleOk = locationData => {
        dispatch(saveNewLocation({...locationData , category: activeCategory}));
        backToCategoryList();
    }

    const backToCategoryList = () => {
        history.push('/category-list');
    }

    return (
        <div className="newLocationContainer">
            <Modal visible={true} title="New Location" onCancel={backToCategoryList} footer={[
                <Button form="newLocationForm" key="submit" type="primary" htmlType="submit"> Add </Button>,
                <Button key="back" onClick={backToCategoryList}> Return </Button>,]}
            >

                <Form id="newLocationForm" onFinish={handleOk} name="basic">
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input location name!', },]}>
                        <Input />
                     </Form.Item>
                     <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input location address!', },]}>
                         <Input />
                     </Form.Item>
                     <Form.Item label="Latitude" name="latitude" rules={[{ required: true, message: 'Please input latitude coordinate!', },]}>
                        <Input type="number"/>
                     </Form.Item> 
                     <Form.Item label="Longitude" name="longitude" rules={[{ required: true, message: 'Please input longitude coordinate!', },]}>
                        <Input type="number"/>
                     </Form.Item> 
                </Form>
            </Modal>
        </div>
    );
}

export default NewLocation;
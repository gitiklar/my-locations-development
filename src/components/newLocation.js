import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Form , Button, Input, Modal } from 'antd';

import { savNewLocation } from '../redux/actions';
import useTitle from './useTitle';

const NewLocation = ({category}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    useTitle('- new location');

    const handleOk = (locationData) => {
        dispatch(savNewLocation({...locationData , category}));
        backToCategoryList();
    }

    const backToCategoryList = () => {
        history.push('/category-list');
    }

    return (
        <div className="newLocationContainer">
            <Modal visible={true} title="New Location" onCancel={backToCategoryList} footer={[

                <Button form="newLocationForm" key="submit" type="primary" htmlType="submit"> Add </Button>,
                <Button key="back" onClick={backToCategoryList}> Return </Button>,]}>

                <Form id="newLocationForm" onFinish={handleOk} name="basic">
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input location name!', },]}>
                        <Input />
                     </Form.Item>
                     <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input location address!', },]}>
                         <Input />
                     </Form.Item>
                     <Form.Item label="Coordinates" name="coordinates" rules={[{ required: true, message: 'Please input two coordinates!', },]}>
                        <Input type="number"/>
                     </Form.Item>    
                </Form>
            </Modal>
        </div>
    );
}

export default NewLocation;
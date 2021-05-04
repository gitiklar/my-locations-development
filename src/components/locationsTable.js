import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';

const EditableCell = ({editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (<Form.Item name={dataIndex} style={{margin: 0,}} rules={[ { required: true, message: `Please Input ${title}!`, },]}> 
                    {inputNode} </Form.Item>) : (children) }
    </td>
  );
};

const LocationsTable = ({originData}) => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    useEffect(()=>{
            setData([...originData]);
    },[originData]);

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({name: '', address: '' , latitude: '', longitude: '', ...record,});
        setEditingKey(record.key);
    };

    const cancel = () => {setEditingKey('');};

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [{ title: 'name'       , dataIndex: 'name'       ,  width: '23%' , editable: true, }, 
                    {  title: 'address'    , dataIndex: 'address'    ,  width: '23%' , editable: true, },
                    {  title: 'latitude'   , dataIndex: 'latitude'   ,  width: '23%' , editable: true, },
                    {  title: 'longitude'  , dataIndex: 'longitude'  ,  width: '23%' , editable: true, },
                    {  title: 'operation'  , dataIndex: 'operation'  ,   
                        render: (_, record) => {
                            const editable = isEditing(record);                                                                               
                            return editable ? (
                                <span>
                                    <a href="javascript:;" onClick={() => save(record.key)} style={{ marginRight: 8,}}>Save</a>
                                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                    <a>Cancel</a>
                                    </Popconfirm>
                                </span>) : (
                                    <>
                                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>Edit &nbsp;&nbsp;&nbsp;&nbsp;</Typography.Link>
                                        <Typography.Link disabled={editingKey !== ''} onClick={() => {}}>Delete</Typography.Link>
                                    </>
                                );},},
                    ];
    const mergedColumns = columns.map((col) => {
      if (!col.editable) { return col; }
      
        return {
            ...col, onCell: (record) => ({ 
                            record, inputType: (col.dataIndex === 'latitude' || col.dataIndex === 'longitude') ? 'number' : 'text',
                            dataIndex: col.dataIndex,
                            title: col.title,
                    editing: isEditing(record),}),};});

    return (
        <Form form={form} component={false}>
            <Table size="large" components={{ body: { cell: EditableCell, },}} bordered dataSource={data} columns={mergedColumns} rowClassName="editable-row" pagination={{ pageSize: 5 , onChange: cancel,}}/>
        </Form>
    );
};

export default LocationsTable;
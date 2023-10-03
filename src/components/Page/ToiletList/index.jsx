import React from 'react'
import  { useState } from 'react';
import { Button,Form, Select, Table } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
// import { styles } from "./styles";
const { Option } = Select;

export default function ToiletList() {
    const [size, setSize] = useState('large');

    const selectStyle = {
        minWidth: "45%"
    };

    const formItemStyle = {
        marginBottom: "0px",
        fontSize: "15px",
        fontWeight: "bold",
        // minWidth :'2rem'
    };

    const divStyle = {
     flex:'1'
   
    };

    //Yeh Table Part Hai
    const data = [
        {
            key: '1',
            serial: 1,
            name: 'CSD',
            total: 100,
            active: 70,
            inactive: 20,
            pending: 10,
        },
        {
            key: '2',
            serial: 2,
            name: 'LOCO LOCO',
            total: 15,
            active: 110,
            inactive: 20,
            pending: 30,
        },
        {
            key: '3',
            serial: 3,
            name: 'EMY',
            total: 170,
            active: 100,
            inactive: 15,
            pending: 25,
        },
        {
            key: '4',
            serial: 4,
            name: 'Kitchen',
            total: 130,
            active: 70,
            inactive: 40,
            pending: 45,
        },
        {
            key: '5',
            serial: 5,
            name: 'FMD EAST',
            total: 40,
            active: 20,
            inactive: 20,
            pending: 20,
        },

    ];

    const columns = [
        {
            title: <span style={{ fontWeight: 'bold' }}>Sl. No.</span>,
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Name</span>,
            dataIndex: 'name',
            key: 'name',
        },
        // {
        //     title: <span style={{ fontWeight: 'bold' }}>Total</span>,
        //     dataIndex: 'total',
        //     key: 'total',
        // },
        // {
        //     title: <span style={{ fontWeight: 'bold' }}>Active</span>,
        //     dataIndex: 'active',
        //     key: 'active',
        // },
        // {
        //     title: <span style={{ fontWeight: 'bold' }}>Inactive</span>,
        //     dataIndex: 'inactive',
        //     key: 'inactive',
        // },
        {
            title: <span style={{ fontWeight: 'bold' }}>Zone List</span>,
            dataIndex: 'zonelist',
            key: 'zonelist',
        },
    ];

    const grandTotal = {
        key: "grandTotal",
        serial: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Total:</span>,
        // total: 0,
        // active: 0,
        // inactive: 0,
        zonelist: 0,
    };

    data.forEach((item) => {
        grandTotal.total += item.total;
        grandTotal.active += item.active;
        grandTotal.inactive += item.inactive;
        // grandTotal.pending += item.pending;
    });

  return (
    <>
    <div style={{minWidth:'100%'}}>
    <Form
                style={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "spacebetween",
                }}
            >
               <div style={divStyle}>
                    <Form.Item
                        // label="Location"
                        label={<span style={{ fontWeight: "bold" }}>Location </span>}
                        name="location"
                        colon={false}
                        style={formItemStyle}
                    />
                    <Select placeholder="Area" allowClear style={selectStyle}>
                        <Option value="jamshedpur">Jamshedpur</Option>
                    </Select>
                    
                    </div>
                    <div style={divStyle}>
                    <Form.Item
                        // label="area"
                        label={<span style={{ fontWeight: "bold" }}>Units </span>}
                        name="units"
                        colon={false}
                        style={formItemStyle}
                    />
                    <Select placeholder="Area" allowClear style={selectStyle}>
                        <Option value="jamshedpur">TSK Inside Plant</Option>
                        <Option value="jamshedpur">PHC Township</Option>
                    </Select>
                    
                    </div>
                    <div style={divStyle}>
                    <Form.Item
                        // label="area"
                        // label={<span style={{ fontWeight: "bold" }}>Area </span>}
                        name="search"
                        colon={false}
                        style={formItemStyle}
                    />
                     <Button type="primary" icon={<DownloadOutlined />} size={size}>
                     Search
                    </Button>
                    </div>

                </Form>
                </div>
                <br />
                <div style={{minWidth:'100%'}}>
            <Table
                // dataSource={data}
                dataSource={[...data, grandTotal]}
                columns={columns}
                // title={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Unit wise view</span>}
                // footer={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>GrandTotal:</span>}
                pagination={false}
            />
            </div>
      
    </>
  )
}

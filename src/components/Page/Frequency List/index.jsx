import React from "react";
import { Form, Select, Table, Button } from 'antd';
const { Option } = Select;

function FrequencyList() {

    //Yeh Form Part Hai
    const selectStyle = {
        width: "95%"
    };

    const formItemStyle = {
        marginBottom: "0px",
        fontSize: "15px",
        fontWeight: "bold"
    };

    const divStyle = {
        flex: "1",
        marginLeft: "50px",
    };

    //Yeh Table Part Hai
    const data = [
        {
            key: '1',
            serial: 1,
            unit: 'Jamshedpur',
            code: 'HS0050325',
            name: 'ENGG SRVCS Head room',
            actualfrequency: 2,
            modifiedfrequency: 4,
            fromdate: '2023-08-14',
            todate: '2023-05-12',
            status: 'ACTIVE'
        },
        {
            key: '2',
            serial: 2,
            unit: 'Jamshedpur',
            code: 'HS0050845',
            name: 'EQMS LRS MECHANICAL',
            actualfrequency: 2,
            modifiedfrequency: 2,
            fromdate: '2023-08-16',
            todate: '2023-05-15',
            status: 'ACTIVE'
        },

    ];

    const columns = [
        {
            title: <span style={{ fontWeight: 'bold' }}>Sl. No.</span>,
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Unit</span>,
            dataIndex: 'unit',
            key: 'unit',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Code</span>,
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Name</span>,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Actual Frequency</span>,
            dataIndex: 'actualfrequency',
            key: 'actualfrequency',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Modified Frequency</span>,
            dataIndex: 'modifiedfrequency',
            key: 'modifiedfrequency',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>From Date</span>,
            dataIndex: 'fromdate',
            key: 'fromdate',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>To Date</span>,
            dataIndex: 'todate',
            key: 'todate',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Status</span>,
            dataIndex: 'status',
            key: 'status',
        },
    ];


    return (
        <>
            <div style={{ minWidth: '100%' }}>
                <Form
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space",
                    }}
                >
                    <div style={divStyle}>
                        <Form.Item
                            label="Location"
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
                            label="Units"
                            name="units"
                            colon={false}
                            style={formItemStyle}
                        />
                        <Select placeholder="Units" allowClear style={selectStyle}>
                            <Option value="all">All</Option>
                            <Option value="jamshedpur">Jamshedpur</Option>
                        </Select>
                    </div>
                    <Button style={{ marginTop: "27px" }} type="primary" size="large">Search</Button>
                </Form>
            </div>
            <div style={{ minWidth: '100%' }}>
                <Table
                    dataSource={data}
                    columns={columns}
                    title={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Frequency List</span>}
                    pagination={false}
                />
            </div>
        </>
    )
}

export default FrequencyList
import React, { useState } from 'react';
import { Form, Select, Input, Table, Button } from 'antd';
const { Option } = Select;

function AssetStatus() {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

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
            select: '',
            serial: 1,
            unit: 'Jamshedpur',
            zone: 'EAST',
            code: 'HS0050807',
            name: 'CANTEEN SERVICES P/T ( M)',
            frequency: 2,
            status: 'ACTIVE'
        },
        {
            key: '2',
            select: '',
            serial: 2,
            unit: 'Jamshedpur',
            zone: 'EAST',
            code: 'HS0050810',
            name: 'C S OFFICE 1ST FLOOR',
            frequency: 2,
            status: 'ACTIVE'
        },

    ];

    const columns = [
        {
            title: <span style={{ fontWeight: 'bold' }}>Select</span>,
            dataIndex: 'select',
            key: 'select',
        },
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
            title: <span style={{ fontWeight: 'bold' }}>Zone</span>,
            dataIndex: 'zone',
            key: 'zone',
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
            title: <span style={{ fontWeight: 'bold' }}>Frequency</span>,
            dataIndex: 'frequency',
            key: 'frequency',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Status</span>,
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        <>
            <Form
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
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
                <div style={divStyle}>
                    <Form.Item
                        label="Asset ID"
                        name="assetId"
                        colon={false}
                        style={formItemStyle}
                    />
                    <Input />
                </div>
                <div style={divStyle}>
                    <Form.Item
                        label="Asset Name"
                        name="assetname"
                        colon={false}
                        style={formItemStyle}
                    />
                    <Input />
                </div>
                <Button style={{ marginTop: "27px", marginLeft: "20px" }} type="primary">Search</Button>
            </Form>
            <div style={{ minWidth: '100%' }}>
                <Table
                    rowSelection={rowSelection}
                    dataSource={data}
                    columns={columns}
                    title={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Asset Status</span>}
                    pagination={false}
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                        Save Changes
                    </Button>
                    <span
                        style={{
                            marginLeft: 8,
                        }}
                    >
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
            </div>
        </>
    )
}

export default AssetStatus;
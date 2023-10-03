import React, { useState } from "react";
import { Card, Form, Input, Select, Table, Radio, Space, DatePicker, Button } from 'antd';
const { Option } = Select;

function History() {
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
        {
            title: <span style={{ fontWeight: 'bold' }}>Total</span>,
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Active</span>,
            dataIndex: 'active',
            key: 'active',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Inactive</span>,
            dataIndex: 'inactive',
            key: 'inactive',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Pending</span>,
            dataIndex: 'pending',
            key: 'pending',
        },
    ];

    const grandTotal = {
        key: "grandTotal",
        serial: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Total:</span>,
        total: 0,
        active: 0,
        inactive: 0,
        pending: 0,
    };

    data.forEach((item) => {
        grandTotal.total += item.total;
        grandTotal.active += item.active;
        grandTotal.inactive += item.inactive;
        grandTotal.pending += item.pending;
    });

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    const { RangePicker } = DatePicker;

    return (
        <>
            <div>
                <Card
                    style={{
                        minWidth: '100%',
                        border: '1px solid #C7C7C8',
                        minHeight: "100%",
                    }}
                >
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
                                label="Time-Period"
                                name="timeperiod"
                                colon={false}
                                style={formItemStyle}
                            />
                            <Select placeholder="Time-Period" allowClear style={selectStyle}>
                                <Option value="today">Today</Option>
                                <Option value="last7days">Last 7 Days</Option>
                                <Option value="last14days">Last 14 Days</Option>
                            </Select>
                        </div>
                        <Button style={{ marginTop: "27px" }} type="primary">Search</Button>
                    </Form>
                </Card>
            </div>
            <br />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <strong>OR</strong>
            </div>
            <br />
            <div>
                <Card
                    style={{
                        minWidth: '100%',
                        minHeight: "100%",
                        border: '1px solid #C7C7C8'
                    }}
                    bordered={true}
                >
                    <Form
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            // justifyContent: "center",
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
                                label="Zone"
                                name="zone"
                                colon={false}
                                style={formItemStyle}
                            />
                            <Select placeholder="Zone" allowClear style={selectStyle}>
                                <Option value="all">All</Option>
                                <Option value="east">East</Option>
                                <Option value="west">West</Option>
                            </Select>
                        </div>
                        <div style={divStyle}>
                            <Form.Item
                                label="Area"
                                name="area"
                                colon={false}
                                style={formItemStyle}
                            />
                            <Select placeholder="Area" allowClear style={selectStyle}>
                                <Option value="all">All</Option>
                                <Option value="auction yard">Auction Yard</Option>
                                <Option value="csd">CSD</Option>
                                <Option value="emy">EMY</Option>
                                <Option value="loco loco">Loco Loco</Option>
                            </Select>
                        </div>
                        <div style={divStyle}>
                            <Form.Item
                                label="Locality"
                                name="locality"
                                colon={false}
                                style={formItemStyle}
                            />
                            <Select placeholder="Locality" allowClear style={selectStyle}>
                                <Option value="all">All</Option>
                            </Select>
                        </div>
                    </Form>
                    <br />
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                                <Radio value={1}>Today</Radio>
                                <div style={{ display: "flex", alignItems: 'center' }}>
                                    <Radio value={2}>
                                        Date Range
                                    </Radio>
                                    <div>
                                        <strong>OR</strong>
                                    </div>
                                    {value === 2 ? (
                                        <Space direction="vertical" size={12}>
                                            <RangePicker format="DD-MM-YYYY" />
                                        </Space>
                                    ) : null}
                                    <Button style={{ marginLeft: "20px" }} type="primary">Search</Button>
                                </div>
                            </Space>
                        </Radio.Group>
                    </div>
                </Card >
            </div >
            <Table
                // dataSource={data}
                dataSource={[...data, grandTotal]}
                columns={columns}
                title={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Unit wise view</span>}
                // footer={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>GrandTotal:</span>}
                pagination={false}
            />
        </>
    );
}

export default History
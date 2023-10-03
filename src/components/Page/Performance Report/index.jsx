import React from "react";
import { Form, Select, Table, Button } from "antd";
const { Option } = Select;

const PerformanceReport = () => {

    //Yeh Form Part Hai
    const selectStyle = {
        width: "70%"
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
            name: 'John Doe',
            mobno: '123-456-7890',
            total: 100,
            active: 70,
            cleaned: 45,
            pending: 10,
            maxvisit: 45,
            todayvisit: 45,
            daytwo: 47,
            daythree: 25,
            dayfour: 45,
        },
        {
            key: '2',
            serial: 2,
            name: 'Jane Smith',
            mobno: '987-654-3210',
            total: 120,
            active: 80,
            cleaned: 60,
            pending: 20,
            maxvisit: 50,
            todayvisit: 40,
            daytwo: 55,
            daythree: 30,
            dayfour: 40,
        },
        {
            key: '3',
            serial: 3,
            name: 'Bob Johnson',
            mobno: '555-123-4567',
            total: 80,
            active: 60,
            cleaned: 35,
            pending: 15,
            maxvisit: 40,
            todayvisit: 35,
            daytwo: 42,
            daythree: 20,
            dayfour: 35,
        },
        {
            key: '4',
            serial: 4,
            name: 'Alice Williams',
            mobno: '777-999-8888',
            total: 150,
            active: 100,
            cleaned: 75,
            pending: 25,
            maxvisit: 60,
            todayvisit: 55,
            daytwo: 70,
            daythree: 40,
            dayfour: 55,
        },
        {
            key: '5',
            serial: 5,
            name: 'David Brown',
            mobno: '444-333-2222',
            total: 90,
            active: 65,
            cleaned: 40,
            pending: 25,
            maxvisit: 35,
            todayvisit: 30,
            daytwo: 38,
            daythree: 22,
            dayfour: 40,
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
            title: <span style={{ fontWeight: 'bold' }}>Mobile No.</span>,
            dataIndex: 'mobno',
            key: 'mobno',
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
            render: (text, record) => (
                <span>
                    {text} ({record.activePercentage}%)
                </span>
            ),
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Cleaned</span>,
            dataIndex: 'cleaned',
            key: 'cleaned',
            render: (text, record) => (
                <span>
                    {text} ({record.cleanedPercentage}%)
                </span>
            ),
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Pending</span>,
            dataIndex: 'pending',
            key: 'pending',
            render: (text, record) => (
                <span>
                    {text} ({record.pendingPercentage}%)
                </span>
            ),
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Max. Daily Visits</span>,
            dataIndex: 'maxvisit',
            key: 'maxvisit',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Today's Visits</span>,
            dataIndex: 'todayvisit',
            key: 'todayvisit',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>2 days</span>,
            dataIndex: 'daytwo',
            key: 'daytwo',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>3 days</span>,
            dataIndex: 'daythree',
            key: 'daythree',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>4 days</span>,
            dataIndex: 'dayfour',
            key: 'dayfour',
        },
    ];

    data.forEach((item) => {
        item.activePercentage = ((item.active / item.total) * 100).toFixed(2);
        item.cleanedPercentage = ((item.cleaned / item.total) * 100).toFixed(2);
        item.pendingPercentage = ((item.pending / item.total) * 100).toFixed(2);
    });

    return (
        <>
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
                <Button style={{ marginLeft: "20px", marginTop: "30px" }} type="primary">Search</Button>
            </Form>
            <Table
                dataSource={data}
                // dataSource={[...data, grandTotal]}
                columns={columns}
                title={() => (
                    <div>
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Performance</span>
                        <br />
                        <span style={{ fontWeight: 'bold', fontSize: '15px', float: "right" }}>
                            No. of Toilets Not Cleaned In Last
                        </span>
                    </div>
                )}
                // footer={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>GrandTotal:</span>}
                pagination={false}
            />
        </>
    );
};

export default PerformanceReport;

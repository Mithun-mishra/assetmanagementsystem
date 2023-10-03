import React from "react";
import { Form, Select, DatePicker, Space, Button } from "antd";
const { Option } = Select;

const Reports = () => {

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

    const { RangePicker } = DatePicker;

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
                        <Option value="jamshedpur" >Jamshedpur</Option>
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
                        label="Select Date"
                        name="selectdate"
                        colon={false}
                        style={formItemStyle}
                    />
                    <Space direction="vertical" size={12}>
                        <RangePicker format="DD-MM-YYYY" />
                    </Space>
                </div>
                <Button style={{ marginLeft: "20px", marginTop: "30px" }} type="primary">Search</Button>
            </Form>
        </>
    );
};

export default Reports;

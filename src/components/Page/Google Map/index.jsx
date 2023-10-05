import React, { useEffect, useState } from 'react';
import { Form, Select } from "antd";
import MapComp from './MapComp';
import CityLoc from './CityLoc.json'
const { Option } = Select;

function GoogleMap() {
    const [locations, setLocations] = useState([]);

    const selectStyle = {
        minWidth: "95%"
    };

    const formItemStyle = {
        marginBottom: "0px",
        fontSize: "15px",
        fontWeight: "bold",
        // minWidth :'2rem'
    };

    const divStyle = {
        flex: "1",
    };

    useEffect(() => {
        setLocations(CityLoc);
    }, []);
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
            </div>
            <div>
                <h1>Color Code Legends Goes Here</h1>
            </div>
            <MapComp locations={locations} />
        </>
    )
}

export default GoogleMap;
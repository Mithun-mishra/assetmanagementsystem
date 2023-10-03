import React from 'react'
import { Table } from "antd";
function FeedbackReports() {

    //Yeh Table Part Hai
    // const data = [
    //     {
    //         key: '1',
    //         serial: 1,
    //         feedbackdate: 'CSD',
    //         feedbackcount: 100,
    //         view: 70,
    //     },
    //     {
    //         key: '2',
    //         serial: 2,
    //         feedbackdate: 'LOCO LOCO',
    //         feedbackcount: 15,
    //         view: 110,
    //     },
    //     {
    //         key: '3',
    //         serial: 3,
    //         feedbackdate: 'EMY',
    //         feedbackcount: 170,
    //         view: 100,
    //     },
    //     {
    //         key: '4',
    //         serial: 4,
    //         feedbackdate: 'Kitchen',
    //         feedbackcount: 130,
    //         view: 70,
    //     },
    //     {
    //         key: '5',
    //         serial: 5,
    //         feedbackdate: 'FMD EAST',
    //         feedbackcount: 40,
    //         view: 20,
    //     },

    // ];

    const columns = [
        {
            title: <span style={{ fontWeight: 'bold' }}>Sl. No.</span>,
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Feedback Date</span>,
            dataIndex: 'feedbackdate',
            key: 'feedbackdate',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>Feedback Count</span>,
            dataIndex: 'feedbackcount',
            key: 'feedbackcount',
        },
        {
            title: <span style={{ fontWeight: 'bold' }}>View</span>,
            dataIndex: 'view',
            key: 'view',
        },
    ];

    return (
        <>
            <Table
                // dataSource={data}
                columns={columns}
                pagination={false}
            // dataSource={[...data, grandTotal]}
            // title={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Unit wise view</span>}
            // footer={() => <span style={{ fontWeight: 'bold', fontSize: '15px' }}>GrandTotal:</span>}
            />
        </>
    )
}

export default FeedbackReports;
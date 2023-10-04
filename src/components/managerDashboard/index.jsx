import React from 'react'
import { styles } from './styles'
import { Typography } from '@mui/material'
import { Divider } from 'antd';
import Container from '@mui/material/Container';
import FooterTab from '../footer';
import NavTab from '../navbar';
import DateAndTime from '../datatime';
// import GridReport from '../Page/Grid Report';
// import History from '../Page/History/Index';
// import Reports from '../Page/Reports';
// import FeedbackReports from '../Page/Feedback Reports';
// import PerformanceReport from '../Page/Performance Report';
import GoogleMap from '../Page/Google Map';
// import ToiletList from '../Page/ToiletList';
// import UserList from '../Page/UserList';
export default function ManagerDashboard() {
  return (
    <>
      <Container maxWidth="sm" sx={styles.container}>
        <Typography sx={styles.head}>Asset Management System - Kalinganagar </Typography>
        <NavTab />
        <div >
          <DateAndTime />
        </div>
        <Divider style={{ border: '0.10px solid #C7C7C8' }} />

        <div>
          {/* <GridReport /> */}
          {/* <History /> */}
          {/* <Reports /> */}
          {/* <FeedbackReports /> */}
          {/* <PerformanceReport /> */}
          <GoogleMap />
          {/* <ToiletList/> */}
          {/* <UserList/> */}
        </div>
        <br />
        <br />
        <br />
        <FooterTab />
      </Container>


    </>
  )
}

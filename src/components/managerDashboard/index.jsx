import React from 'react'
import { styles } from './styles'
import { Typography } from '@mui/material'
import { Divider } from 'antd';
import Container from '@mui/material/Container';
import FooterTab from '../footer';
import NavTab from '../navbar';
import DateAndTime from '../datatime';

const ManagerDashboard = ({ userRole }) => {

  return (
    <>
      <Container maxWidth="sm" sx={styles.container}>
        <Typography sx={styles.head}>
          Asset Management System - Kalinganagar
        </Typography>
        <div>
          <DateAndTime />
        </div>
        <Divider style={{ border: "0.10px solid #C7C7C8" }} />

        <div style={{ width: '100%' }}>
          <NavTab userRole={userRole} />



        </div>
        <br />
        <br />
        <br />
        <FooterTab />
      </Container>
    </>
  );
};
export default ManagerDashboard;

import React from 'react'
import { styles } from './styles'
import { Typography } from '@mui/material'
import Container from '@mui/material/Container';
import FooterTab from '../footer';
import NavTab from '../navbar';
import { Divider } from 'antd';
import DateAndTime from '../datatime';
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
        <div >
          <DateAndTime />
        </div>
        <Divider />

        <Typography>Location</Typography>

        <br />
        <br />
        <br />
        <br />
        <br />
        <div>

        </div>
        <FooterTab />
      </Container>

    </>
  )
}

import React from 'react'
import {styles} from './styles'
import { Typography } from '@mui/material'
import Container from '@mui/material/Container';
import FooterTab from '../footer';
import NavTab from '../navbar';
export default function ManagerDashboard() {
  return (
    <>
     <Container maxWidth="sm" sx={styles.container}>
     <Typography sx={styles.head}>Asset Management System - Kalinganagar </Typography>

        <NavTab/>

     <br />
        <br />
        <br />
        <br />
        <br />
       <FooterTab/>
      </Container>
      
    </>
  )
}

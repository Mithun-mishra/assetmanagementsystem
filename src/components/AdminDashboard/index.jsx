import React from 'react'
import { styles } from "./styles";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import FooterTab from "../footer";
import NavTab from "../navbar";
import DateAndTime from "../datatime";
import { Divider } from "antd";
import GridReport from '../Page/Grid Report';


export default function AdminDashboard() {
  return (
    <>
     <Container maxWidth="sm" sx={styles.container}>
        <Typography sx={styles.head}>Asset Management System - Kalinganagar </Typography>

        <NavTab />
        <div >
          <DateAndTime />
        </div>
        <Divider />
        <GridReport/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <FooterTab />
      </Container>
      
    </>
  )
}

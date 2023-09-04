import React from 'react'
import { Typography } from '@mui/material'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import {TextField} from '@mui/material';
import Button from "@mui/material/Button";
//from antd
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd'
import { styles } from "./styles";
import { Layout, Space } from 'antd';
const { Footer } = Layout;
export default function Login() {
  return (
    <>
    <Container maxWidth="sm" sx={styles.container}>
     <Typography sx={styles.head}>Asset Management System </Typography>
    <div style={styles.divider}></div>
    <Box sx={styles.loginBox}>
        <br />
       
        <Typography sx={styles.userIdtext}>User ID</Typography>
        {/* <TextField variant="outlined"></TextField> */}
        <Input size="large" placeholder="User ID" prefix={<UserOutlined />} />
        <br />
        <br />
        <Typography>Password</Typography>
        <Input size="large" placeholder="Password"  />
    </Box>
    <br />
    <br />
        <Button variant="contained">Login</Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer style={{ textAlign: 'center',minWidth:"100%" }}> All Rights Reserved © 2023 </Footer>
       
     </Container>
    </>
  )
}

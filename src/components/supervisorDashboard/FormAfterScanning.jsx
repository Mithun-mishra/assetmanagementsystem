
import React from 'react'
import { Input } from 'antd';
import { Typography, TextField } from '@mui/material'
import { BoldOutlined } from '@ant-design/icons';

export default function FormAfterScanning() {
  return (
    <>
    <div>
        <div>
        <Typography fontWeight={"bold"}>
        Asset ID 
        </Typography>
        <TextField disabled={true} value="HS0051143" />
        {/* <Input disabled={true} value="HS0051143" /> */}
        </div>
        <div>
        <Typography fontWeight={"bold"}>
        Asset Address 
        </Typography>
        <TextField disabled={true} value="Z1-CMM-52-G-COMMON" />
        {/* <Input disabled={true} value="HS0051143" /> */}
        </div>
        <div>
        <Typography fontWeight={"bold"}>
        Your Location
        </Typography>
        <TextField disabled={true} value="22.7868672,86.1667328" />
        {/* <Input disabled={true} value="HS0051143" /> */}
        </div>

    </div>
      
    </>
  )
}

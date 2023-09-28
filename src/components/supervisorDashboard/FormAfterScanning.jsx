
import React from 'react'
import { Typography, TextField } from '@mui/material'
import { BoldOutlined } from '@ant-design/icons';
import { Form, Button, Radio, Checkbox, Input, Upload , Space} from "antd";
export default function FormAfterScanning() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    
    console.log(values);
  }
  return (
    <>
    <div>
   
        

    </div>
      
    </>
  )
}

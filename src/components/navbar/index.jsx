import React from 'react'
import { styles } from "./styles"
import { Typography } from '@mui/material'
import Container from '@mui/material/Container';
import FooterTab from '../footer';
import { Button } from '@mui/material';
import {  Select } from "antd";
const { Option } = Select;




const Navbar = ({ userRole }) => {
  const renderNavbarBasedOnRole = () => {
    switch (userRole) {
      case 'cleaner':
        return (
          <div style={styles.navContainer}>
            <Button style={styles.navbtn}>Home</Button>
            <Button style={styles.navbtn}>Logout</Button>
          </div>

        );
      case 'manager':
        return (
          <div style={styles.navContainer}>
            <Button style={styles.navbtn}>Grid Report</Button>
            <Button style={styles.navbtn}>History</Button>
            <Button style={styles.navbtn}>Reports</Button>
            <Button style={styles.navbtn}>Feedback Report</Button>
            <Button style={styles.navbtn}>Performance Report</Button>
            <Button style={styles.navbtn}>Google Map</Button>
            <Button style={styles.navbtn}>Change Frequency</Button>
            <Button style={styles.navbtn}>Frequency List</Button>
            <Button style={styles.navbtn}>Asset Status</Button>
            <Button style={styles.navbtn}>User List</Button>
            <Button style={styles.navbtn}>Toilet List</Button>
            <Button style={styles.navbtn}>Logout</Button>
          </div>

        );

      case 'supervisor':
        return (
          <div style={styles.navContainer}>
            <div>
              <Button style={styles.navbtn}>Home</Button>
              <Button style={styles.navbtn}>My Grid Report</Button>
              <Button style={styles.navbtn}>Google Map</Button>
            </div>
            <Button style={styles.navbtn}>Logout</Button>
          </div>

        );

        case 'admin':
          return (
            <div style={styles.navContainer}>
              <div>
                <Button style={styles.navbtn}>Users</Button>
                {/* <Select placeholder="User Mapping" allowClear style={{backgroundcolor: "blue",color: "black",fontSize:"0.8rem", textTransform: "none"}} > */}
                <Button style={styles.navbtn}> UserMapping
                        <Option value="all">List</Option>
                        <Option value="all">Add/Edit</Option>
                        </Button>
                    {/* </Select> */}
                
              </div>
              <Button style={styles.navbtn}>Logout</Button>
            </div>
  
          );

      default:
        return null;
    }
  }
  return (
    <div>
      {renderNavbarBasedOnRole()}
      {/* Rest of your component */}
    </div>
  );
};

export default function NavTab() {




  return (
    <>

      <div style={styles.divider}> 
        <Navbar userRole={"admin"} />
        {/* <div style={styles.navContainer}>
      <Navbar userRole={"manager"} />

        {/* <div style={styles.navContainer}>
      <Navbar userRole={"manager"} />
      {/* <div style={styles.navContainer}>
    <Button style={styles.navbtn}>Grid Report</Button>
    <Button style={styles.navbtn}>History</Button>
    <Button style={styles.navbtn}>Reports</Button>
    <Button style={styles.navbtn}>Feedback Report</Button>
    <Button style={styles.navbtn}>Performance Report</Button>
    <Button style={styles.navbtn}>Google Map</Button>
    <Button style={styles.navbtn}>Change Frequency</Button>
    <Button style={styles.navbtn}>Frequency List</Button>
    <Button style={styles.navbtn}>Asset Status</Button>
    <Button style={styles.navbtn}>User List</Button>
    <Button style={styles.navbtn}>Toilet List</Button>
    <Button style={styles.navbtn}>Logout</Button>
</div> */}

      </div>

    </>
  )
}

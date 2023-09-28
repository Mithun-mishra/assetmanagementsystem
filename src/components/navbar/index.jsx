import React from 'react'
import {styles} from "./styles"
import { Typography } from '@mui/material'
import Container from '@mui/material/Container';
import FooterTab from '../footer';
import {Button} from '@mui/material';




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
            <div style={ styles.navContainer}>
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
          default:
            return null;
    }}
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
      <Navbar userRole={"supervisor"} />
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

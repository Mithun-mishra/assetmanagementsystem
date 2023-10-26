import React, { useState } from 'react';
import { styles } from "./styles"
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import GridReport from '../Page/Grid Report';
import History from '../Page/History/Index';
import Reports from '../Page/Reports';
import FeedbackReports from '../Page/Feedback Reports';
import PerformanceReport from '../Page/Performance Report';
import GoogleMap from '../Page/Google Map';
import ChangeFrequency from '../Page/Change Frequency';
import FrequencyList from '../Page/Frequency List';
import AssetStatus from '../Page/Asset Status';

import Select from '@mui/material/Select';
// import {  Select } from "antd";
const { Option } = Select;


const Navbar = ({ userRole, setSamePage }) => {

  const handleButtonClick = (componentName) => {
    setSamePage(componentName);
  };

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


            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('gridReport')}
            >
              Grid Report
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('history')}
            >
              History
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('reports')}
            >
              Reports
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('feedbackreports')}
            >
              Feedback Report
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('performancereport')}
            >
              Performance Report
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('googlemap')}
            >
              Google Map
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('changefrequency')}
            >
              Change Frequency
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('frequencylist')}
            >
              Frequency List
            </Button>
            <Button
              style={styles.navbtn}
              onClick={() => handleButtonClick('assetstatus')}
            >
              Asset Status
            </Button>
            <Button
              style={styles.navbtn}
            // onClick={() => handleButtonClick('userlist')}
            >
              User List
            </Button>
            <Button
              style={styles.navbtn}
            // onClick={() => handleButtonClick('toiletlist')}
            >
              Toilet List
            </Button>
            <Button
              style={styles.navbtn}
            // onClick={() => handleButtonClick('logout')}
            >
              Logout
            </Button>


            {/* <Button style={styles.navbtn}>Grid Report</Button>
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
            <Button style={styles.navbtn}>Logout</Button> */}
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
              <Button style={styles.navbtn}>
                <FormControl style={{ width: '150px', border: 'none' }}>
                  <InputLabel id="demo-simple-select-label" style={styles.navbtn}>User Mapping</InputLabel>
                  <Select

                    label="User Mapping"

                  >
                    <MenuItem >List</MenuItem>
                    <MenuItem >Add/Edit</MenuItem>

                  </Select>
                </FormControl>
              </Button>
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

const NavTab = () => {
  const [samePage, setSamePage] = useState('/managerdashboard');

  return (
    <>

      <div style={styles.divider}>
        <Navbar userRole={"manager"} setSamePage={setSamePage} />
        <div>
          {samePage === 'gridReport' && <GridReport />}
          {samePage === 'history' && <History />}
          {samePage === 'reports' && <Reports />}
          {samePage === 'feedbackreports' && <FeedbackReports />}
          {samePage === 'performancereport' && <PerformanceReport />}
          {samePage === 'googlemap' && <GoogleMap />}
          {samePage === 'changefrequency' && <ChangeFrequency />}
          {samePage === 'frequencylist' && <FrequencyList />}
          {samePage === 'assetstatus' && <AssetStatus />}
        </div>
      </div>

    </>
  )
}
export default NavTab;
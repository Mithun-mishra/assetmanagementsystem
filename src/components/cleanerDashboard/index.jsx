import React from "react";
import { styles } from "./styles";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import FooterTab from "../footer";
import NavTab from "../navbar";
import DateAndTime from "../datatime";
import { Divider } from "antd";
import QRscanner from "../QRscanner";

export default function CleanerDashboard() {
  return (
    <>
      <Container maxWidth="sm" sx={styles.container}>
        <Typography sx={styles.head}>
          Asset Management System - Kalinganagar{" "}
        </Typography>

        <NavTab />
        <div>
          <DateAndTime />
        </div>
        <Divider />

        <QRscanner />
        <FooterTab />
      </Container>
    </>
  );
}

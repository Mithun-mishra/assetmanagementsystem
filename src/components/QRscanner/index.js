import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import CleanerForm from "./cleanerForm";

export default function QRscanner() {
  const [result, setResult] = useState(undefined);
  const [isScanning, setIsScanning] = useState(false); // Start with scanning disabled

  const startScanning = async () => {
    try {
      // alert(navigator.mediaDevices);

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // alert(stream);
      setIsScanning(true);
    } catch (error) {
      alert(error);
      console.error("Error accessing the camera:", error);
    }
  };

  const stopScanning = () => {
    setIsScanning(false);
  };

  const handleScan = (data) => {
    if (data) {
      console.log(data);
      setResult(data?.text.match(/id=([^&]+)/)[1]);
      stopScanning();
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <>
      {result ? (
        <div style={{ width: "100%" }}>
          <CleanerForm houseId={result} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "solid 1px black",
            padding: "1rem",
            position: "relative",
          }}
        >
          {isScanning ? (
            <>
              <QrReader
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                <QrCodeScannerRoundedIcon
                  fontSize="large"
                  color="white"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <button
                style={{ marginTop: "10px", padding: "5px 10px" }}
                onClick={stopScanning}
              >
                Stop Scanning
              </button>
            </>
          ) : (
            <>
              <img src="/hathmaiphone.svg" alt="Hathma iPhone" />
              <button
                style={{ marginTop: "10px", padding: "5px 10px" }}
                onClick={startScanning}
              >
                Start Scanning
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

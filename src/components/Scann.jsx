import React, { useState } from "react";
import { Card, Text, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

function Scann() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      setVideoUrl(data);
      // TODO
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.colors.dark[0],
        padding: "5%",
        gap: "5%",
        flexWrap: "wrap",
        boxSizing: "border-box",
      }}
    >
      <Card
        shadow="sm"
        padding="lg"
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: theme.colors.dark[7],
          color: "white",
        }}
      >
        <Text size="xl" align="center" style={{ marginBottom: "5%" }}>
          Escanear Código QR
        </Text>
        {!videoUrl && <QrReader onScan={handleScan} onError={handleError} style={{ width: "100%", height: "auto" }} />}
        {videoUrl && (
          <>
            <video controls style={{ width: "100%", height: "auto", marginTop: "20px" }} src={videoUrl} />
            <Text size="md" align="center" style={{ marginTop: "20px" }}>
              Reproduciendo video para: {videoUrl}
            </Text>
          </>
        )}
      </Card>
    </div>
  );
}

export default Scann;

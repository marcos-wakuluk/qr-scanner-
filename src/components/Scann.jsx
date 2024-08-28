import React, { useState, useEffect } from "react";
import { Card, Text, Button, useMantineTheme, Loader, Center } from "@mantine/core";

function Scann() {
  const theme = useMantineTheme();
  const [scanResult, setScanResult] = useState(null);
  const [usbDevices, setUsbDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestDevices = async () => {
    try {
      setLoading(true);
      const device = await navigator.usb.requestDevice({ filters: [{ vendorId: 44176, productId: 12290 }] });
      setUsbDevices([device]);
      setSelectedDevice(device);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error al solicitar dispositivo USB:", error);
    }
  };

  useEffect(() => {
    navigator.usb.getDevices().then((devices) => {
      if (devices.length > 0) {
        setUsbDevices(devices);
      } else {
        alert("No se detectaron dispositivos USB conectados.");
      }
    });

    navigator.usb.addEventListener("connect", (event) => {
      setUsbDevices((prevDevices) => [...prevDevices, event.device]);
    });

    navigator.usb.addEventListener("disconnect", (event) => {
      setUsbDevices((prevDevices) => prevDevices.filter((device) => device !== event.device));
      if (selectedDevice && event.device === selectedDevice) {
        setSelectedDevice(null);
        alert("El dispositivo seleccionado se ha desconectado.");
      }
    });

    return () => {
      navigator.usb.removeEventListener("connect", () => {});
      navigator.usb.removeEventListener("disconnect", () => {});
    };
  }, [selectedDevice]);

  const handleScan = (event) => {
    const scannedData = event.target.value;
    if (scannedData) {
      setScanResult(scannedData);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedDevice) {
        handleScan(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDevice]);

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
          {selectedDevice ? "Listo para escanear" : "Seleccionar dispositivo USB"}
        </Text>
        {loading ? (
          <Center>
            <Loader />
          </Center>
        ) : !selectedDevice ? (
          <Button onClick={requestDevices}>Seleccionar dispositivo USB</Button>
        ) : (
          <>
            <div
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: theme.colors.dark[6],
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                color: theme.colors.gray[0],
              }}
            >
              <Text size="md">Esperando para escanear...</Text>
            </div>
            {scanResult && (
              <div>
                <video controls style={{ width: "100%", height: "auto", marginTop: "20px" }} src={scanResult} />
                <Text size="md" align="center" style={{ marginTop: "20px" }}>
                  Reproduciendo video para: {scanResult}
                </Text>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
}

export default Scann;

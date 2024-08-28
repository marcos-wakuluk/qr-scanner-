import { useState, useRef } from "react";
import { Card, Button, NumberInput, Center, Grid, Modal, Box, Image, FileButton } from "@mantine/core";
import QRCode from "qrcode.react";
import { useMantineTheme } from "@mantine/core";
import { saveAs } from "file-saver";

function Video() {
  const theme = useMantineTheme();
  const [videoFile, setVideoFile] = useState(null);
  const [number, setNumber] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [qrCodes, setQrCodes] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const videoRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event;
    if (file) {
      if (file.type.startsWith("video/")) {
        if (videoUrl) {
          URL.revokeObjectURL(videoUrl);
        }
        const newVideoUrl = URL.createObjectURL(file);
        setVideoUrl(newVideoUrl);
        setVideoFile(file);
      } else {
        setVideoFile(null);
        setVideoUrl("");
      }
    } else {
      setVideoFile(null);
      setVideoUrl("");
    }
  };

  const handleGenerateQR = () => {
    if (videoFile && number) {
      const numberOfTables = parseInt(number, 10);
      const qrValues = Array.from({ length: numberOfTables }, (_, index) => ({
        value: `${videoUrl}?number=${index + 1}`,
        label: `Mesa nº ${index + 1}`,
      }));
      setQrCodes(qrValues);
      setModalOpened(true);
    }
  };

  const downloadQR = (qr, index) => {
    const canvas = document.getElementById(`qr-${index}`);
    canvas.toBlob((blob) => {
      saveAs(blob, `mesa numero ${index + 1}.png`);
    });
  };

  const handleDownloadAllQR = () => {
    qrCodes.forEach((qr, index) => {
      downloadQR(qr, index);
    });
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.colors.dark[9],
        padding: "5%",
        boxSizing: "border-box",
      }}
    >
      <Box style={{ position: "absolute" }}>
        <Image src="src/assets/marcio-wakuluk-producciones.png" height={700} />
      </Box>
      <Card
        shadow="sm"
        padding="lg"
        style={{ width: "100%", maxWidth: "1200px", backgroundColor: theme.colors.dark[8], opacity: "0.8", color: theme.colors.dark[0] }}
      >
        <Grid>
          <Grid.Col span={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* <FileInput label="Selecciona un video" onChange={handleFileChange} accept="video/*" clearable /> */}
            <FileButton onChange={handleFileChange} accept="video/*">
              {(props) => <Button {...props}>Selecciona un video</Button>}
            </FileButton>
            <NumberInput label="Cantidad de mesas" value={number} onChange={(value) => setNumber(value)} style={{ marginTop: "2%" }} />
            <Center>
              <Button onClick={handleGenerateQR} mt="5%" w="100%" disabled={!videoFile || !number}>
                Generar QR
              </Button>
            </Center>
          </Grid.Col>
          <Grid.Col span={6}>
            <video ref={videoRef} controls style={{ width: "100%", height: "300px", marginTop: "5%" }} src={videoUrl} />
          </Grid.Col>
        </Grid>
      </Card>

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Códigos QR Generados" size="lg">
        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {qrCodes.map((qr, index) => (
            <Box key={index} style={{ marginTop: "5%", textAlign: "center" }}>
              <QRCode id={`qr-${index}`} value={qr.value} size={256} />
              <Box style={{ marginTop: "2%", fontWeight: "bold" }}>{qr.label}</Box>
            </Box>
          ))}
          <Button onClick={handleDownloadAllQR} mt="5%">
            Descargar todos los QR
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Video;

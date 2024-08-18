import React, { useState, useRef } from "react";
import { Card, Button, FileInput, NumberInput, TextInput, Center } from "@mantine/core";
import QRCode from "qrcode.react";
import { useMantineTheme } from "@mantine/core";

function Video() {
  const theme = useMantineTheme();
  const [videoFile, setVideoFile] = useState(null);
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleGenerateQR = () => {
    // TODO
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
      <Card shadow="sm" padding="lg" style={{ width: "50%", backgroundColor: theme.colors.dark[7], color: theme.colors.dark[0] }}>
        <FileInput label="Selecciona un video" onChange={handleFileChange} accept="video/*" />
        {videoFile && (
          <>
            <video ref={videoRef} controls style={{ width: "100%", marginTop: "5%" }} src={videoUrl} />
            <TextInput label="Texto sobre el video" value={text} onChange={(event) => setText(event.target.value)} />
            {videoFile && number && <QRCode value={`${videoUrl}?number=${number}`} size={256} />}
          </>
        )}
        <NumberInput label="Cantidad de mesas" value={number} onChange={(value) => setNumber(value)} style={{ marginTop: "2%" }} />
        <Center>
          <Button onClick={handleGenerateQR} mt="5%" w="30%" disabled={!videoFile && !number}>
            Generar QR
          </Button>
        </Center>
      </Card>
    </div>
  );
}

export default Video;

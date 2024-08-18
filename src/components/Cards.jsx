import React from "react";
import { Card, Center, Text, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconQrcode, IconScan } from "@tabler/icons-react";

function Cards() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
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
        shadow="md"
        padding="xl"
        style={{
          width: "40%",
          maxWidth: "300px",
          cursor: "pointer",
          backgroundColor: theme.colors.dark[8],
          borderRadius: theme.radius.md,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: theme.shadows.md,
          boxSizing: "border-box",
        }}
        onClick={() => handleCardClick("/generator")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Center style={{ flexDirection: "column" }}>
          <IconQrcode color={theme.colors.white} size={60} />
          <Text color={theme.colors.white} size="xl" fw={700} weight={500} style={{ fontSize: "30px" }}>
            Generar
          </Text>
        </Center>
      </Card>

      <Card
        shadow="md"
        padding="xl"
        style={{
          width: "40%",
          maxWidth: "300px",
          cursor: "pointer",
          backgroundColor: theme.colors.dark[8],
          borderRadius: theme.radius.md,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: theme.shadows.md,
          boxSizing: "border-box",
        }}
        onClick={() => handleCardClick("/scann")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Center style={{ flexDirection: "column" }}>
          <IconScan color={theme.colors.white} size={60} />
          <Text color={theme.colors.white} size="xl" fw={700} weight={500} style={{ fontSize: "30px" }}>
            Escanear
          </Text>
        </Center>
      </Card>
    </div>
  );
}

export default Cards;

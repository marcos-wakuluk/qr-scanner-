import { Box, Card, Image, Text, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function QRGenerator() {
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
        backgroundColor: theme.colors.dark[9],
        padding: "5%",
        gap: "5%",
        flexWrap: "wrap",
        boxSizing: "border-box",
      }}
    >
      <Box style={{ position: "absolute" }}>
        <Image src="src/assets/marcio-wakuluk-producciones.png" height={700} />
      </Box>
      <Card
        shadow="md"
        padding="xl"
        style={{
          width: "300px",
          height: "168.77px",
          cursor: "pointer",
          opacity: "0.8",
          backgroundColor: theme.colors.dark[8],
          borderRadius: theme.radius.md,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: theme.shadows.md,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onClick={() => handleCardClick("/video")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Text color={theme.colors.white} fw={700} style={{ fontSize: "30px" }} weight={500}>
          Casamiento
        </Text>
        <Text color={theme.colors.white} fw={700} style={{ fontSize: "30px" }} weight={500}>
          Cumpleaños
        </Text>
      </Card>

      <Card
        shadow="md"
        padding="xl"
        style={{
          width: "300px",
          height: "168.77px",
          maxWidth: "300px",
          cursor: "pointer",
          opacity: "0.8",
          backgroundColor: theme.colors.dark[8],
          borderRadius: theme.radius.md,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: theme.shadows.md,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onClick={() => handleCardClick("/videos")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Text color={theme.colors.white} fw={700} weight={500} style={{ marginTop: "5%", fontSize: "30px" }}>
          Egreso
        </Text>
      </Card>
    </div>
  );
}

export default QRGenerator;

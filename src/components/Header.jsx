import React from "react";
import { Container, Button, useMantineTheme, Box } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { IconArrowLeft, IconHome } from "@tabler/icons-react";

function Header() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <Box
      height={120}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.dark[1],
        color: "#fff",
        position: "fixed",
        width: "100%",
        padding: "1%",
      }}
    >
      <Container>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <>
            <Button
              variant="subtle"
              onClick={() => navigate(-1)}
              disabled={isHomePage}
              styles={(theme) => ({
                root: {
                  color: isHomePage ? "#AEEEEE" : "#98FB98",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: isHomePage ? "not-allowed" : "pointer",
                },
              })}
            >
              <IconArrowLeft size={40} />
            </Button>
            <Button
              variant="subtle"
              onClick={() => navigate("/")}
              disabled={isHomePage}
              styles={(theme) => ({
                root: {
                  color: isHomePage ? "#87CEFA" : "#1E90FF",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: isHomePage ? "not-allowed" : "pointer",
                },
              })}
            >
              <IconHome size={40} />
            </Button>
          </>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;

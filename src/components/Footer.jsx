import React from "react";
import { Box, Text, Center, useMantineTheme } from "@mantine/core";

function Footer() {
  const theme = useMantineTheme();

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
        bottom: 0,
        width: "100%",
        padding: "10px",
      }}
    >
      <Center>
        <Text size="md">© {new Date().getFullYear()} Developed by Marcos Wakuluk</Text>
      </Center>
    </Box>
  );
}

export default Footer;

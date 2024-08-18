import React from "react";
import { useMantineTheme } from "@mantine/core";

function Videos() {
  const theme = useMantineTheme();

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
      {/* TODO */}
    </div>
  );
}

export default Videos;

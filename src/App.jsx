import React from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <h1>¡Hola, Electron y React!!!!!</h1>
      </div>
    </MantineProvider>
  );
}

export default App;

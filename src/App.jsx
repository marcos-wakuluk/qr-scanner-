import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QRGenerator from "./components/QRGenerator";
import Video from "./components/Video";
import Videos from "./components/Videos";
import Scann from "./components/Scann";

const theme = {
  colorScheme: "dark",
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "blue",
  colors: {
    dark: ["#1c1c1c", "#2e2e2e", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "black"],
    blue: ["#003f5c", "#2f4b7c", "#4f6d7a", "#6e8b8b", "#8f9b9c", "#a0b8b1", "#d1e0e0", "#ffffff"],
  },
  components: {},
};

function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/generator" element={<QRGenerator />} />
          <Route path="/video" element={<Video />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/scann" element={<Scann />} />
        </Routes>
        <Footer />
      </Router>
    </MantineProvider>
  );
}

export default App;

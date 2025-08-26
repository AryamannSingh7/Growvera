import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    colors: {
      white: [
        "#ffffff",
        "#efefef",
        "#dcdcdc",
        "#bdbdbd",
        "#989898",
        "#7c7c7c",
        "#656565",
        "#525252",
        "#464646",
        "#3d3d3d",
        "#292929",
      ],
      primary: [
        "#eefff3",
        "#d8ffe5",
        "#b3ffcd",
        "#79fca6",
        "#29f06f",
        "#0dda55",
        "#04b543",
        "#078e38",
        "#0c6f31",
        "#0c5b2a",
        "#003314",
      ],
    },
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

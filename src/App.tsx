import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalents from "./Pages/FindTalents";
import TalentProfilePage from "./Pages/TalentProfilePage";
import ListJobPage from "./Pages/ListJobPage";
import "@mantine/tiptap/styles.css";
import JobPage from "./Pages/JobPage";
import ApplyJobJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";

function App() {
  const theme = createTheme({
    focusRing: "never",
    primaryColor: "primary",
    primaryShade: 4,
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
    fontFamily: "Montserrat, sans-serif",
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Routes>
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalents />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="apply-job" element={<ApplyJobJobPage />} />
            <Route path="/jobs" element={<JobPage />} />
            <Route path="/list-job" element={<ListJobPage />} />
            <Route path="/company-page" element={<CompanyPage />} />

            <Route path="*" element={<Homepage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

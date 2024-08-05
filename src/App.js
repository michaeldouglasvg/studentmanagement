import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Globalstyles from "./styles/GlobalStyles";
import Header from "./layout/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from "./pages/404";
import { createTheme } from "@mui/material";
import Footer from "./layout/Footer";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Home from "./pages/Home";
import { BookProvider } from "./context/BookContext";

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    document.body.classList.add(mode);
    return () => {
      document.body.classList.remove(mode);
    };
  }, [mode]);

  const theme = createTheme({
    colors: {
      header: "skyblue",
      body: mode === "dark" ? '#335c6e' : '#ffffff',
      footer: "#335c6e",
      color: mode === "dark" ? '#ffffff' : '#335c6e',
      border: mode === "dark" ? "1px solid #ffffff" : "1px solid #335c6e",
      boxshadow: mode === "dark" ? "0 0 5px 1px rgba(255, 255, 255, .1)" : "0 0 5px 1px rgba(0, 0, 0, .1)",
      transparent: mode === "dark" ? "rgba(255, 255, 255, .8)" : "rgba(0, 0, 0, .8)"
    },
    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px"
    },
    flex: {
      chosedirection: "column",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <BookProvider>
        <Router>
          <Header toggleMode={toggleMode} mode={mode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Students />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </BookProvider>
    </ThemeProvider>
  );
}

export default App;

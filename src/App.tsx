import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { PageContainer } from "./containers";
import { Detail, Home, Search } from "./pages";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <PageContainer>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="videos/:id" element={<Detail />} />
            <Route path="search/:keyword" element={<Search />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;

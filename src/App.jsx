import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import TVRemotes from "./pages/TVRemotes";
import ACRemotes from "./pages/ACRemotes";
import Stand from "./pages/Stand";
import Home from "./pages/Home"; // Import the Home component
import { ProductProvider } from "./context/ProductContext";
import { ACProductProvider } from "./context/ACProductContext";

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  return (
    <ProductProvider>
      <ACProductProvider>
        <Router>
          <div className="dark">
            <Navbar onSearch={(query) => setSearchQuery(query.toLowerCase())} />
            <Routes>
              <Route path="/" element={<Home />} /> {/* Default Home page */}
              <Route path="/remotes" element={<TVRemotes searchQuery={searchQuery} />} />
              <Route path="/ac-remotes" element={<ACRemotes searchQuery={searchQuery} />} />
              <Route path="/stands" element={<Stand />} />
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths to Home */}
            </Routes>
          </div>
        </Router>
      </ACProductProvider>
    </ProductProvider>
  );
};

export default App;

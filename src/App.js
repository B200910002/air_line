import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./mainComps/header";
import Footer from "./mainComps/footer";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";

//hi app
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />}/>
          <Route path="/upload" exact element={<UploadPage />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

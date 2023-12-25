import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Popup from "./components/popup/Popup";
import Footer from "./components/footer/Footer";
import SegmentManagement from "./components/segments/SegmentManagement";

function App() {
  return (
    <div>
      <Popup />
      <Navbar />
      <SegmentManagement />
      <Footer className="container mx-auto p-8 rounded-lg shadow-lg min-h-screen text-white bg-white flex flex-col items-center justify-between" />
    </div>
  );
}

export default App;

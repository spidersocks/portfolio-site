import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/en" element={<Home lang="en" />} />
        <Route path="/zh" element={<Home lang="zh" />} />
        {/* No calculator routes here! Vercel rewrites handle those */}
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
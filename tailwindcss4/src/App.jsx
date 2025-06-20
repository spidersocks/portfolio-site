import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect plain "/" to preferred language if desired, e.g. "en" */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        {/* Language-prefixed routes */}
        <Route path="/en" element={<Home lang="en" />} />
        <Route path="/zh" element={<Home lang="zh" />} />
        {/* Redirect calculator routes to your deployed calculator site */}
        <Route
          path="/en/800m-calculator/*"
          element={<Navigate to="https://www.seanfontaine.dev/en/800m-calculator" replace />}
        />
        <Route
          path="/zh/800m-calculator/*"
          element={<Navigate to="https://www.seanfontaine.dev/zh/800m-calculator" replace />}
        />
        {/* Add more localized routes as needed */}
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
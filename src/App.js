import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
export default function App() {
  return (
    <div className="app">
      <Feed />
      <Widgets />
    </div>
  );
}

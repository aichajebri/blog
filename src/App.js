import "./App.css";
import Home from "../src/components/home/Home";
import { Route, Routes } from "react-router-dom";
import Write from "./components/write/Write";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/write" exact element={<Write />} />
      </Routes>
    </>
  );
}

export default App;

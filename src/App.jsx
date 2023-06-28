import { Route, Routes } from "react-router-dom";
import "../src/Assets/css/main.css";
import Home from "./Pages/Home";
import IframeView from "./Pages/IframeView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demo-iframe/:url" element={<IframeView />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;

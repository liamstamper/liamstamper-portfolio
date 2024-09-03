import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

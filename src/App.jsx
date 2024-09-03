import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import ProjectsExpanded from "./ProjectsExpanded";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:id" element={<ProjectsExpanded />} />
      </Routes>
    </Router>
  );
}

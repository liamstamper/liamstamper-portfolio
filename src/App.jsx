import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import ProjectsExpanded from "./ProjectsExpanded";
import MoreProjects from "./Components/MoreProjects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:id" element={<ProjectsExpanded />} />
        <Route path="/moreprojects" element={<MoreProjects />} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import Home from "./pages/Home";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;


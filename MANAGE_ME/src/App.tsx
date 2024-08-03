
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RouterTab from "./components/RouterTab";
import AddTaskPage from "./pages/AddTaskPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/addtask" Component={AddTaskPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignUpPage} />
        </Routes>
        <RouterTab />
        
        
      </div>
    </Router>
  );
}

export default App;

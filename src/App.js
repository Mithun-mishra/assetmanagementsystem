
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import CleanerDashboard from './components/cleanerDashboard';
import SupervisorDashboard from './components/supervisorDashboard';
import ManagerDashboard from './components/managerDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} /> 
        <Route path="/cleanerdashboard" element={<CleanerDashboard />} /> 
        <Route path="/supervisordashboard" element={<SupervisorDashboard />} /> 
        <Route path="/admindashboard" element={<AdminDashboard />} /> 
      </Routes>
    </BrowserRouter>  


    </div>
  );
}

export default App;

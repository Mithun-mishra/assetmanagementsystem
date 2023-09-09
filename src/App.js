
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import CleanerDashboard from './components/cleanerDashboard';

import ManagerDashboard from './components/managerDashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} /> 
        <Route path="/cleanerdashboard" element={<CleanerDashboard />} /> 
      </Routes>
    </BrowserRouter>  


    </div>
  );
}

export default App;

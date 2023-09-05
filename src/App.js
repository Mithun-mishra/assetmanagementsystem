
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';

import ManagerDashboard from './components/managerDashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} /> 
      </Routes>
    </BrowserRouter>  


    </div>
  );
}

export default App;

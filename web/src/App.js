import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import NavBar from './components/common/NavBar';

function AppLayout() {
  const location = useLocation();
  
  // Show navbar only on authenticated routes (dashboard, etc.)
  const authenticatedRoutes = ['/dashboard'];
  const showNavBar = authenticatedRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

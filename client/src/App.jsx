import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// General pages imports
import Homepage from './Pages/Homepage/Homepage';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardProfile from './Pages/Dashboard/DashboardProfile/DashboardProfile';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import DashboardRecipes from './Pages/Dashboard/DashboardRecipes/DashboardRecipes';
// Auth pages imports
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="recipes" element={<DashboardRecipes />} />
        </Route>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App

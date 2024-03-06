import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
// import DashboardRecipes from './Pages/DashboardRecipes/DashboardRecipes';
// import DashboardCalendar from './Pages/DashboardCalendar/DashboardCalendar';
// import DashboardObjectives from './Pages/DashboardObjectives/DashboardObjectives';

function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route element={<Home />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        {/* <Route element={<DashboardRecipes />} path="/dashboard-recipes" /> */}
        {/* <Route element={<DashboardCalendar />} path="/dashboard-calendar" /> */}
        {/* <Route element={<DashboardObjectives />} path="/dashboard-objectives" /> */}

        {/* Auth Routes */}
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  )
}

export default App

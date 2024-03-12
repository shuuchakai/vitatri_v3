import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// General pages imports
import Homepage from './Pages/Homepage/Homepage';
// Auth pages imports
import Login from './Pages/Auth/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Homepage />} />
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

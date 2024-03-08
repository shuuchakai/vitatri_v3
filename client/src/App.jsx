import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Homepage />} />
        {/* Auth Routes */}
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import RatingCompete from './components/RatingCompete/RatingCompete';
import RatingForm from './components/RatingForm/RatingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RatingForm />} />
        <Route path="/success" element={<RatingCompete />} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import RatingCompete from './pages/RatingCompete/RatingCompete';
import RatingForm from './pages/RatingForm/RatingForm';
import { RatingContext } from './context/RatingContext';

function App() {
    const [rating, setRating] = useState(0);
    const handleRating = (idx: number) => setRating(idx);
  return (
    <Router>
        <RatingContext.Provider value={rating}>
          <Routes>
            <Route path="/" element={<RatingForm handleRating={handleRating} />} />
            <Route path="/success" element={<RatingCompete />} />
          </Routes>
        </RatingContext.Provider>
      </Router>
  )
}

export default App

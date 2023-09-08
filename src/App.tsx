import './App.css'
import RatingRow from './components/RatingRow/RatingRow'
import StarredCircle from './components/StarredCircle/StarredCircle';
import SubmitButton from './components/UI/SubmitButton/SubmitButton';

function App() {
  return (
    <div className="container">
      <div className="row-wrap">
        <StarredCircle />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!
        </p>
        <RatingRow />
        <SubmitButton />
      </div>
    </div>
  )
}

export default App

import './App.css'
import DarkBox from './components/DarkBox/DarkBox';
import RatingRow from './components/RatingRow/RatingRow'
import StarredCircle from './components/StarredCircle/StarredCircle';
import SubmitButton from './components/UI/SubmitButton/SubmitButton';

function App() {
  return (
    <DarkBox>
      <StarredCircle />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!
      </p>
      <RatingRow />
      <SubmitButton />
    </DarkBox>
  )
}

export default App

import './App.css';
import Counter from './components/Counter';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from './redux/configureStore';
import { getUser } from "./redux/store/actions/userAction";
import { useEffect } from 'react';

function App() {

  const count: number = useSelector((state: RootState) => state.counterReducer.count);
  const lastName: string = useSelector((state: RootState) => state.userReducer.lastName);
  console.log(lastName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  const voters: string[] = [
    "Prasad Khanapure ",
    "Nikita Gourshete",
  ];

  return (
    <div className="App">
      <h2> Total Votes: {count}</h2>
      {voters.map(voter => (
        <Counter name={voter} />
      ))}
    </div>
  );
}

export default App;

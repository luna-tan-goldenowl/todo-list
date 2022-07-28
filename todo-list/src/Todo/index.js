import { useReducer,} from 'react';
import reducer, {initState} from './reducer'
import {setJob, addJob, deleteJob} from './action'

//dispatch
function App() {

  const [state, dispatch] = useReducer(reducer, initState);
  const {job, jobs} = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input 
        value={job}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add todo</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} 
          <span onClick={()=> dispatch(deleteJob(index))}>
            &otimes;
          </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

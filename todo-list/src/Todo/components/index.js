import { useReducer, useState} from 'react';
import reducer, { initState } from '../reducer/todo';
import {addJob, deleteJob } from '../action'
// import '../components/index.scss'

//dispatch
function App() {

  const [value, setValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initState);
  const {jobs} = state;

  console.log("fghjkl", jobs)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(value));
    setValue('');
  }

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id))
    console.log("hhh jkunb", id)
  }
  return (
    <div className='container'>
      <h2 className='title'>Todo List</h2>
      <input 
        type='text'
        className='input-todo'
        value={value}
        placeholder="Enter todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        className='btn-add'
        type="submit"
        disabled={!value}
        onClick={handleSubmit}>
        Add todo
      </button>

      <ul className='tasks'>
        {Object.values(jobs).map((job) => (
          <li 
            key={job?.id}>
            <button
              onClick = {()=>handleDeleteJob(job?.id)}
              style = {{
                backgroundColor: 'transparent',
                fontSize: 16,
                border: 'none',
                textDecoration: job?.complete ? "line-through" : "none"}}
            >
              {job?.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

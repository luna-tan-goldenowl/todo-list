import { useReducer,} from 'react';
import reducer, {initState} from './reducer'
import {setJob, addJob, deleteJob, filter_active, filter_comp} from './action'
import './index.scss'
import remove from './trash-can-duotone.svg'

//dispatch
function App() {

  const [state, dispatch] = useReducer(reducer, initState);
  const {job, jobs} = state;
  
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
  }

  // const handleFilter = () => {
  //   dispatch(filter_active())
  //   //console.log(state.arr_active)
  //   console.log(state)
  // }

  return (
    <div className='container'>
      <h2 className='title'>Todo List</h2>
      <input 
      className='input-todo'
        value={job}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button 
        className='btn-add'
        onClick={(e) => {
            handleSubmit();
          }}>
        Add todo
      </button>
      <ul className='tasks'>
        {jobs.map((job, index) => (
          <li 
            className='task'
            key={index}>{job} 
            <span 
              className='delete'
              onClick={(e)=> {
                  dispatch(deleteJob(index))
                  e.currentTarget.parentElement.style.textDecorationLine = 'line-through';               
                }} 
              >
              <img className='remove' src={remove} alt="" />
            </span>
          </li>
        ))}
      </ul>
      <button className='btn-all' >All</button>
      <button className='btn-active' onClick={(e) => {
                                                dispatch(filter_active());
                                                
                                              }}>Active</button>
      <button className='btn-complete' onClick={() => dispatch(filter_comp())}>Completed</button>
    </div>
  );
}

export default App;

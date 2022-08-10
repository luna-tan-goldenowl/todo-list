import { useState, useMemo } from "react";
import { addJob, deleteJob } from "./Todo/actions/task";
import { TASK } from "./Todo/actionType";
import "./index.scss";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.todo.jobs);
  console.log("🚀 ~ file: index.js ~ line 15 ~ App ~ jobs", jobs);
  const [value, setValue] = useState("");

  const [currentFilter, setCurrentFilter] = useState(
    TASK.SET_FILTER.FILTER_ALL
  );

  const getTodosByFilter = useMemo(() => {
    switch (currentFilter) {
      case TASK.SET_FILTER.FILTER_COMP:
        return Object.values(jobs)?.filter((job) => job?.complete);
      case TASK.SET_FILTER.FILTER_ACT:
        return Object.values(jobs)?.filter((job) => !job?.complete);
      default:
        return Object.values(jobs);
    }
  }, [currentFilter, jobs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(value));
    setValue("");
  };

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  const handleChangeFilter = (val) => setCurrentFilter(val);

  return (
    <div className="container">
      <div>
        <h1 className="title">todos</h1>
      </div>
      <div className="todoapp">
        <form action="">
          <img src="" alt="" />
          <input
            type="text"
            className="input-todo"
            value={value}
            placeholder="What needs to be done?"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="btn-add"
            type="submit"
            disabled={!value}
            onClick={handleSubmit}
          >
            Add todo
          </button>
        </form>
        <div>
          {getTodosByFilter?.length === 0 && <p>No task</p>}
          <ul className="tasks">
            {getTodosByFilter.map((job) => (
              <li key={job?.id}>
                <div>
                  <input class="checkbox" type="box" checked></input>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      fontSize: 16,
                      border: "none",
                      textDecoration: job?.complete ? "line-through" : "none",
                    }}
                  >
                    <label htmlFor="">{job?.name}</label>
                  </button>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteJob(job?.id)}
                ></button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="tasks">
            {Object.keys(TASK.SET_FILTER).map((type) => {
              const currFilter = TASK.SET_FILTER[type];
              return (
                <button
                  className="button-filter"
                  key={`${currFilter}`}
                  onClick={(e) => {
                    handleChangeFilter(`${currFilter}`);
                  }}
                >
                  {currFilter}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useMemo } from "react";
import { addJob, deleteJob } from "./Todo/actions/task";
import { TASK } from "./Todo/actionType";
import arrow from "./arrow_down.svg";
import check from "./check.svg";
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

  const handleRemoveJob = (id) => {
    dispatch(deleteJob(id));
  };

  const handleChangeFilter = (val) => setCurrentFilter(val);

  return (
    <section className="container">
      <div>
        <h1 className="title">todos</h1>
      </div>
      <div className="todoapp">
        <form action="">
          <div className="arrow-input">
            <img className="arrow-down" src={arrow} alt="" />
            <input
              type="text"
              className="input-todo"
              value={value}
              placeholder="What needs to be done?"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
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
                <div className="todo-job">
                  <input
                    class="checkbox"
                    type="button"
                    onClick={() => handleDeleteJob(job?.id)}
                    style={{ background: job?.id ? { check } : "none" }}
                  ></input>
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
    </section>
  );
}

export default App;

import { SET_FILTER } from "../constants";
// import { getTodosByFilter } from "../filter";
import { useState, useMemo} from "react";
import { useSelector } from "react-redux";
// import '../components/index.scss'


export const FilterList = () => {

    const [currentFilter, setCurrentFilter] = useState(SET_FILTER.FILTER_ALL);
    const jobs = useSelector(({job}) => job?.jobs);

    // const { jobs, visibilityFilter } = useSelector(state => state);

    const getTodosByFilter = useMemo(() => {
        switch(currentFilter) {
            case SET_FILTER.FILTER_COMP:
            return Object.values(jobs)?.filter((job) => !job?.complete);
            case SET_FILTER.FILTER_ACT:
            return Object.values(jobs)?.filter((job) => job?.complete);
            default:
            return Object.values(jobs);
        }
    },[currentFilter, jobs])

    const handleChangeFilter = (val) => setCurrentFilter(val);
    //   const filterTodo = getTodosByFilter(jobs, visibilityFilter);
    console.log('haha', )
    return (
        <div>
            {/* <ul className='tasks'>
                {filterTodo.length ? filterTodo.map((job) => (
                    <li key={`${job.id}`}>
                        {job.name}
                    </li>
                )) : <p>No task today</p>}
                
            </ul> */}
            <div>
                <ul className='tasks'>
                    {Object.keys(SET_FILTER).map((type) => {
                        const currentFilter = SET_FILTER[type]
                        return (
                            <button
                                key={`${currentFilter}`}
                                style = {{
                                    height: '30px',
                                    width: '100px',
                                    marginLeft: '5px',
                                    marginTop: '10px',
                                    fontSize: '16px'
                                }}
                                onClick={() => getTodosByFilter(`${currentFilter}`)}
                            >
                                {currentFilter}
                            </button>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FilterList;
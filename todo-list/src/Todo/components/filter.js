import { SET_FILTER } from "../constants";
import { filter } from "../action";
import { useDispatch } from "react-redux";

export const Filter = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <ul className='tasks'>
                    {Object.keys(SET_FILTER).map((type) => {
                        const currFilter = SET_FILTER[type]
                        console.log("nè", currFilter)
                        return (
                            <button
                                key={`${currFilter}`}
                                // style = {{
                                //     height: '30px',
                                //     width: '100px',
                                //     marginLeft: '5px',
                                //     marginTop: '10px',
                                //     fontSize: '16px'
                                // }}
                                onClick={() => dispatch(filter(currFilter))}
                            >
                                {currFilter}
                            </button>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Filter;
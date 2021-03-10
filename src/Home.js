import { stopAsync, initAsync, initDepAsync1, initDepAsync2, initDepAsync3 } from 'core/store/actions/testActions';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export const Home = () => {
    const dispatch = useDispatch()
    const [times, setTimes] = useState(0)
    const state = useSelector(state => state.reducer)

    const handleInitAsync = useCallback(() => {
         dispatch(initAsync(times + 1))
         setTimes(times + 1)
    }, [setTimes, dispatch, times])

    return <div>
        <button onClick={handleInitAsync}>INIT Async</button>
        <button onClick={() => dispatch(stopAsync())}>STOP Async</button>

<hr />
<button onClick={() => dispatch(initDepAsync1())}>initDepAsync1</button>
<button onClick={() => dispatch(initDepAsync2())}>initDepAsync2</button>
<button onClick={() => dispatch(initDepAsync3())}>initDepAsync3</button>

    </div>
}
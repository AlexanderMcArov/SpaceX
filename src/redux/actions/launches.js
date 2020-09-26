import Axios from 'axios'
import { FETCH_LAUNCHES_START,
    FETCH_LAUNCHES_ACCESS,
    FETCH_LAUNCHES_ERROR
 } from './constans'

export function fetchLaunches(){
    return (dispatch) => {
        dispatch(fetchLaunchesStart())
        Axios.get('https://api.spacex.land/rest/launches?limit=20')
            .then(res=>{
                console.log(res.data);
                dispatch(fetchLaunchesAccess(res.data))
            })
            .catch(err=>{
                console.log(err.responce);
                dispatch(fetchLaunchesError(err.responce))
            })
    }
}

export function fetchLaunchesAccess(launches){
    return {
        type: FETCH_LAUNCHES_ACCESS,
        launches
    }
}
export function fetchLaunchesStart(){
    return {
        type: FETCH_LAUNCHES_START,
        loading: true
    }
}
export function fetchLaunchesError(error){
    return {
        type: FETCH_LAUNCHES_ERROR,
        error
    }
}
import Axios from 'axios'
import React, { useEffect } from 'react'
import  classes from './Launches.module.css'
import {useDispatch,useSelector}  from 'react-redux'
import { fetchLaunches } from '../../redux/actions/launches'



function Launches () {
  
const dispatch = useDispatch()
const isLoading = useSelector(state =>{
    console.log(state);
    return state.launchReducer.loading
})
const lauches = useSelector (state =>{
    return state.launchReducer.launches
})
        useEffect(() =>{
          dispatch(fetchLaunches())
        },[])
        
  return(
    <>
    {
      isLoading ? <p className={classes.Title}>Loading...</p> 
      : <h1 className={classes.Title>Launches}></h1>
    }
    </>
  )


}

export default Launches
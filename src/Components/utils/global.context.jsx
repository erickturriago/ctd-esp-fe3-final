import { createContext, useContext, useEffect, useReducer, useState } from "react";

import axios from "axios";
import { reducer } from "../../reducers/reducer";

export const DentistaStates = createContext()

const initialState = {
    dentistaList: [],
    dentistaSelected: [],
    theme:'light'
}

const Context = ({children}) => {
    //Todos los estados que necesito
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)
    // const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://jsonplaceholder.typicode.com/users'
   
    //Todas las funciones que necesito
    useEffect(() => {
        axios(url)
        .then(res => {
            console.log(res.data)
            dispatch({type: 'GET_LIST', payload: res.data})
        }) 
    }, [])
    
    return (
        <DentistaStates.Provider value={{state, dispatch}}>
            {children}
        </DentistaStates.Provider>
    )
}

export default Context

export const useDentistaStates = () => useContext(DentistaStates)
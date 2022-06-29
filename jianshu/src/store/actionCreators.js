import axios from 'axios'
import {CHANGE_INPUT_VALUE,ADD_NEW_LIST,DELETE_LIST_ITEM,INIT_LIST} from './actionType'

export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const addNewListAction = () =>({
    type:ADD_NEW_LIST,
})

export const deleteListAction = (index) =>({
    type:DELETE_LIST_ITEM,
    index
})

export const initListAction = (data) =>({
    type:INIT_LIST,
    data
})

export const getToDoList = () =>{
    return (dispatch) =>{
        axios.get('/api/todolist').then(res=>{
            const data = res.data
            console.log(data)
            const action  = initListAction(data)
            dispatch(action)
          })
    }
}
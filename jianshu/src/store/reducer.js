import {CHANGE_INPUT_VALUE,ADD_NEW_LIST,DELETE_LIST_ITEM,INIT_LIST} from './actionType'

const defaultState = {
    inputValue : '',
    list : []
}

export default (state = defaultState,action) =>{
    console.log(state,action)
   if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
   }

   if(action.type === ADD_NEW_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(state.inputValue)
    return newState
   }

   if(action.type === DELETE_LIST_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value,1)
    return newState
   }

   if(action.type === INIT_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
   }
    return state;

}
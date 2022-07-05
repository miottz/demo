
const defaultState = {
    inputValue:"",
    list:[]

}
export default(state=defaultState,action)=>{
    if(action.type==="change_input_value"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        console.log(newState.inputValue,"input")
        return newState
    }
    if(action.type==="add_new_item"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=""
        return newState
    }
    if(action.type==="delete_item"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        console.log(action.index)
        return newState

    }
    return state
}
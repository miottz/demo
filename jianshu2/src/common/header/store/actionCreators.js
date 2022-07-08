import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'


export const  searchFocus = () =>({
    type:constants.SEARCH_FOCUS
})


export const  searchBlur = () =>({
    type:constants.SEARCH_BLUR
})

 const changeList = (data) =>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

export const getList = (list) =>{
    return (dispatch) =>{
        if(list.size>0){
            dispatch(changeList(list))
           
        }
        else{
            axios.get('/api/headerList.json').then(res=>{
                dispatch(changeList(res.data.data))
        
               }).catch(err=>{
                console.log(err)
        
               })

        }
      
    }
}


export const mouseEnter = () =>({
    type:constants.MOUSE_ENTER
})


export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})

export const changeToNewPage = (page) =>({
    type:constants.CHANGE_TO_NEW_PAGE,
    page
})
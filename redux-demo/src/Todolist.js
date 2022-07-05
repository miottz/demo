import React, { Component } from "react";
import store from './store';
import {connect} from 'react-redux';


class Todolist extends Component {

    render() {
        const {inputValue,changeInputValue,handleDelete,handleSubmit}=this.props
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    <button onClick={handleSubmit}>提交</button>
                </div>
                <ul>
                   {
                    this.props.list.map((item,index)=>{
                        return <li key={index} onClick={index=>handleDelete()}>{item}</li>
                    })
                   }
                </ul>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        changeInputValue(e){
           const  action={
                type:"change_input_value",
                value:e.target.value
            }
            dispatch(action)

        },
        handleSubmit(){
            const action={
                type:"add_new_item",
            }
            dispatch(action)
        },
        handleDelete(index){
            const action ={
                type:"delete_item",
                index:index
            }
            dispatch(action)

        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);
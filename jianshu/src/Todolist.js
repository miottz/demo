import React, { Component } from "react";
import { Button, Input, List, Typography,Icon,Modal } from 'antd';
import {getInputChangeAction,addNewListAction,deleteListAction, getToDoList } from  './store/actionCreators'
import 'antd/dist/antd.css';
import store from './store';
import axios from 'axios';

class Todolist extends Component {
    constructor(props){
        super(props)
        this.state= store.getState()
        store.subscribe(this.handleStoreChange)
       
    }
    componentDidMount(){
        const action = getToDoList()
        store.dispatch(action)

    }
    handleStoreChange = () =>{
        this.setState(store.getState())
    }
    handleInputChange = (e)=>{
       
       const action = getInputChangeAction(e.target.value)
       store.dispatch(action)
    }
    handleClick = (e) =>{
        const action = addNewListAction()
        store.dispatch(action)
    }
    handleDelete = (index) =>{
        const action = deleteListAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <div style={{ margin: 20 }}>
                <Input placeholder="Basic usage" style={{ width: 300 }} value={this.state.inputValue} onChange={this.handleInputChange}/>
                <Button type="primary" style={{ marginLeft: 10 }} onClick = {this.handleClick}>提交</Button>
                <List style={{ width: 300 , marginTop:10}}
                    size="large"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick = {index => this.handleDelete()}>{item} <Icon type="delete"  /></List.Item>)}
                />
                <MyComponent/>


            </div>
        )
    }
}

class MyComponent extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

export default Todolist;





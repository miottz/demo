import React, { Component } from 'react';
import './App.css';




function App() {
  return (
    <div className="App">
      <input onChange={onChange}/>
      <Student name='JACK' age={20}></Student>
    </div>
  );
}

const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
e.target.value = '1'
}



// class组件状态
type Props ={name:string;age?:number}
class Student extends React.Component<Props>{
  static defaultProps:Partial<Props>={
    age:18
  }
  render(){
    const {name,age}=this.props
    return(
      <div>你好，我的名字是 {name},今年{age}岁了
      <Counter/></div>
    )
  }
}
export default App;


// class组件事件和State
type State={count:number}
class Counter extends React.Component<{},State>{
  state: State={
    count:0

  }
  onIncreasement = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render(): React.ReactNode {
    return(
      <button onClick={this.onIncreasement}>点我加一{this.state.count}</button>
    )
  }

}


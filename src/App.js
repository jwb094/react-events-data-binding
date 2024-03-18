import React,{Component} from 'react';
import './App.css';

class App extends  Component{
  state ={
    name:'darth'
  }

  changeName = (newName) =>{
    this.setState({
      name:newName
    })
  }


  changeNamefromInput = (event) =>{
    this.setState({
      name:event.target.value
    })
  }
  render(){
      return (
    <div className="App">
        <button onClick={() =>this.changeName('Changed :(')}>Change state using a non function</button>
        <button onClick={this.changeName.bind(this,'Awesome Tech :)')}>Change state using a bind</button>
        <br/><br/>
        <input typ="text" onChange={this.changeNamefromInput} value={this.state.name}></input>
        <br/><br/>
        <div>{this.state.name}</div>
    </div>
  );
  }

}

export default App;

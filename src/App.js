// 现在的 App.js就是 聪明组件 容器组件
import React from 'react';
import {DELETE_ITEM,INPUT_CHANGE,BUTTON_CLICK} from './store/ActionTypes'
import store from './store/index'
import AppUI from './AppUI'
class App extends React.Component{
  constructor(props) {
    super(props);
    let data = store.getState();
    this.state = data;
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.ItemClick = this.ItemClick.bind(this)
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return <AppUI
      handleClick={this.handleClick}
      handleChange={this.handleChange}
      ItemClick={this.ItemClick}
      inputValue={this.state.inputValue}
      list={this.state.list} />
  }
  ItemClick(index){
    const action={
      type:DELETE_ITEM,
      index:index
    }
    store.dispatch(action)
  }
  handleChange(e){
    const action={
      type:INPUT_CHANGE,
      value:e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleClick(){
    const action ={
      type:BUTTON_CLICK
    }
    store.dispatch(action)
  }
}
export default App

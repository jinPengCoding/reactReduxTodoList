// 需要返回一个函数,会接受连个内容,存放数据以及对数据进行操作
const defaultState = {
  inputValue :'',
  list:[1,2,3]
}
export default(state=defaultState,action)=>{
  switch (action.type){
    case 'input_change':
      var newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case 'button_click':
      var  newState = JSON.parse(JSON.stringify(state))
      // 现在是原来的值
      if(newState.inputValue){
        newState.list.push(newState.inputValue)  
      }
      newState.inputValue = ''
      return newState
    case 'delete_item':
      var newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index,1)
      console.log(action.index)
      return newState
    default:
     return state
  }
}

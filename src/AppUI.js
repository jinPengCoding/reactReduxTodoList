//props// 负责组件的渲染 傻瓜组件 只负责显示
import React from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List} from 'antd'
const AppUI = (props)=>{
  return (
    <div style={{marginTop:'10px',marginLeft:'10px'}}>
      <Input value={props.inputValue} onChange={props.handleChange} style={{width:'300px',marginRight:'10px'}} placeholder="Plese Info" />
    <Button onClick={props.handleClick} type="primary">Add Item</Button>
      <List
      style={{marginTop:'10px',width:'300px'}}
      bordered
      dataSource={props.list}
      renderItem={(item,index) => (<List.Item onClick={()=>props.ItemClick(index)}>{item}</List.Item>)}
    />
    </div>
  )
}
// class AppUI extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state={}
//   }
//   render(){
//     return(
//       <div style={{marginTop:'10px',marginLeft:'10px'}}>
//         <Input value={props.inputValue} onChange={props.handleChange} style={{width:'300px',marginRight:'10px'}} placeholder="Plese Info" />
//       <Button onClick={props.handleClick} type="primary">Add Item</Button>
//         <List
//         style={{marginTop:'10px',width:'300px'}}
//         bordered
//         dataSource={props.list}
//         renderItem={(item,index) => (<List.Item onClick={()=>this.props.ItemClick(index)}>{item}</List.Item>)}
//       />
//       </div>
//     )
//   }
// }
export default AppUI

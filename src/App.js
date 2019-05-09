import React from 'react'
import axios from 'axios'
class App extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      isLoad:false,
      data:[]
    }
  }
  componentDidMount(){
    axios.get("/douban/v2/movie/in_theaters")
    .then((res)=>{
     return  console.log(res.data)
    }).catch((err)=>{
     return  console.log(err)
    })
  }
  render(){
    let {isLoad,data}=this.state
    if(!isLoad){
      return (
        <h2>Loading</h2>
      )
    }
  }
}
export default App

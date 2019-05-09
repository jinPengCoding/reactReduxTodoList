# 这是使用redux管理状态来写的todolist小demo.
# redux的注意点
## store是唯一的，整个应用中只有一个store
## 只有store能够改变自己的内容
 > reducer返回的newState给了store,store拿到reducer返回的数据自己对数据进行了更新

## reducer必须是纯函数
> 纯函数是指给定固定的输入，就会有固定的输出，不会有副作用(不要对传入的参数进行修改)

## 核心API
> createStore(创建一个store)
> store.dispatch()dispatch 是store的方法,帮助派发action
> store.getState() 获取到store里面所有的数据的内容
> store.subscribe() 订阅store的改变,只要store发生改变,store对应的回调函数就会被执行

## 无状态组件 当一个组件只有render的时候就可以通过一个无状态组件替换这个组件，优势性能比较高,因为无状态组件只是一个函数,而组件是一个react的类，还有生命周期函数
> ```const AppUI = (props)=>{return (jsx)}```

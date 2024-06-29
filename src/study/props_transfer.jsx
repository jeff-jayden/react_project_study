function Son1(props){
    return <div>{ props.name }</div>
}


function PropsTransferF2Z(){
    const name = 'this is app name'
    return (
        <div>
            <Son1 name={name}/>
        </div>
    )
}


//子传父 在子组件中调用父组件中的函数并传递参数
function Son2({ onGetMsg }){
    const sonMsg = 'this is son msg'
    return (
        <div>
            {/* 在子组件中执行父组件传递过来的函数 */}
            <button onClick={()=>onGetMsg(sonMsg)}>send</button>
        </div>
    )
}


export function PropsTransferZ2F(){
    const getMsg = (msg)=>console.log(msg)

    return (
        <div>
            {/* 传递父组件中的函数到子组件 */}
            <Son2 onGetMsg={ getMsg }/>
        </div>
    )
}


// 1. 通过子传父 A -> App
// 2. 通过父传子 App -> B

import { useState } from "react"

function A ({ onGetAName }) {
    // Son组件中的数据
    const name = 'this is A name'
    return (
        <div>
            this is A compnent,
            <button onClick={() => onGetAName(name)}>send</button>
        </div>
    )
}

function B ({ name }) {
    return (
        <div>
            this is B compnent,
            {name}
        </div>
    )
}

function App () {
    const [name, setName] = useState('')
    const getAName = (name) => {
        setName(name)
    }
    return (
        <div>
            this is App
            <A onGetAName={getAName} />
            <B name={name} />
        </div>
    )
}

export default App
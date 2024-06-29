import {useState} from "react";

function demo() {
    const clickHandler = (name: string, e: any) => {
        console.log('button按钮点击了', name, e)
    }
    return (
        <button onClick={(e) => clickHandler('zs', e)}>click me</button>
    )
}

// 1. 定义组件
function Button() {
    return (
        <button>click me</button>
    )
}

// 2. 使用组件
function App() {
    return (
        <div>
            {/* 自闭和 */}
            <Button/>
            {/* 成对标签 */}
            <Button></Button>
        </div>
    )
}

function App1() {
    const [count, setCount] = useState(0)
    const [obj, setObj] = useState({
        name: 'zs',
        age: 18
    })

    const handleClick = () => {
        setObj(
            {
                ...obj,
                name: 'ls'
            }
        )
    }
    return (
        <div>
            <button onClick={() => handleClick()}>点击修改姓名</button>
            {obj.name}
            <div style={{color: 'red'}}>this is div</div>
            <span className='foo'>this is span</span>
        </div>
    )
}

export default App1;
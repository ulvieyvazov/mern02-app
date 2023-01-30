import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    // hook -> funksiya
    return <>
        <h1>{count}</h1>
        <button
            onClick={() => {
                setCount(count + 1)
            }}
        >+</button>
        <button
            onClick={() => {
                setCount(count - 1)
            }}
        >-</button>
        <button
            onClick={() => {
                setCount(0)
            }}
        >sifirla</button>
        <button
            onClick={() => {
                let eded = +prompt('ededi daxil edin: ')
                setCount(eded)
            }}
        >xususi</button>
        <button
            onClick={() => {
                console.log(count)
            }}
        >console.log</button>
    </>
}
export default Counter


// render

import { useState } from "react";

function ShowName() {
    const [value, setValue] = useState("")

    return <>
        {/* controlled inputs */}
        <input type="text" value={value} onChange={(e) => {
            setValue(e.target.value)
        }}
        />
        <h1>{value}</h1>
        <button onClick={() => {
            let soz = prompt('enter your value')
            setValue(soz)
        }}>change value</button>
    </>
}
export default ShowName;
// 1. react proyekti yaratmaq
// 2. Counter, showName  her ikisini yazmaq
// 3. ilk task

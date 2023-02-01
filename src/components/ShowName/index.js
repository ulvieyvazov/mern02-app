import axios from "axios";
import { useEffect, useState } from "react";

function ShowName() {
    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    useEffect(
        () => {
            axios.get('http://jsonplaceholder.typicode.com/users')
                .then((resp) => {
                    setData(resp.data)
                })
        },
        [])  // dependency list

    useEffect(() => {
        console.log('value deyisdi')
    }, [value])
    useEffect(() => {
        return () => {
            console.log('oldummm ☠')
        }
    }, [])

    return <>
        {/* controlled */}
        <input type="text" value={value} onChange={(e) => {
            setValue(e.target.value)
        }} />
        <h1>{value}</h1>
        <button onClick={() => {
            let soz = prompt('enter your value')
            setValue(soz)
        }}>change value</button>
        {
            data.map((obj) => {
                return <p key={obj.id}>{obj.name}</p>
            })
        }
    </>
}
export default ShowName;

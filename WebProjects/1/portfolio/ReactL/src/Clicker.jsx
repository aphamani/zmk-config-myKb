import { useState, useEffect, useRef } from 'react'

export default function Clicker ({keyname, clickColor, increment }) {
    const [count, setCount] = useState(parseInt(localStorage.getItem(keyname) ?? 0))
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.style.backgroundColor = 'salmon'
        console.log(buttonRef);
        return () => {
            localStorage.removeItem(keyname)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(keyname, count)
    }, [ count ])



    const buttonClick = () => {
        setCount(value => value + 1)
        increment()
    }
     return <>
        <div style={{color: clickColor}}>Click counter: { count }</div>
        <button ref={ buttonRef } onClick={ buttonClick }>Click me</button>
    </>
}
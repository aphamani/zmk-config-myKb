import Clicker from "./Clicker.jsx";
import People from './People.jsx'
import { useState, useMemo, useRef } from 'react';


export default function App({ children, clickersCount }) {



    const [count, setCount] = useState(0)
    const [hasClicker, setHasClicker] = useState(true)

    const hide = () => {
        setHasClicker(!hasClicker)
    }

    const increment = () => {
        setCount(count + 1)
    }

    // const colorArray = []

    // for (let i = 0; i < clickersCount; i++) {
    //     colorArray.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`)


    const colorArray = useMemo(() => {
        const colorArray = []

        for (let i = 0; i < clickersCount; i++) {
            colorArray.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`)
        }
        return colorArray

    }, [ clickersCount ])

    return <>
        {children}

        <div>Total count: {count}</div>

        <button onClick={hide}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
        {hasClicker ? <>
            {[...Array(clickersCount)].map((value, index) =>
                <Clicker
                    key={index}
                    increment={increment}
                    keyname={`count${index}`}
                    clickColor={colorArray[index]}
                />
            )}
        </> : null}
        <People/>
    </>
}


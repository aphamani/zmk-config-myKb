import { useState, useEffect } from 'react'

export default function People() {
    const [people, setPeople] = useState([])

    const getPeople = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        console.log(result);
        
        setPeople(result)
    }

    useEffect(() => {
        getPeople()
    }, [])

    return <>
        <h2>People</h2>
        <ul>
            {people.map((person, index) =>
                <li key={person.id}>{person.name}</li>
            )}
        </ul>
    </>
}
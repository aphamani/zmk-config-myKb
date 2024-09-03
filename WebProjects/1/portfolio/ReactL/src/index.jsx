import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

const toto = 'there'



root.render(
    <>
        <App clickersCount = { 3 }>
            <h1>Title</h1>
            <h2>Sub title</h2>
        </App>
    </>
)
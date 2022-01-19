import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
    const [s, set] = useState(0)
    return (
        <div>
            <h1>{s}</h1>
            <button onClick={() => set(s + 1)}>+</button>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/about'>About</Link>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/topics" element={<h1>Topics</h1>} />
            </Routes>
        </div>
    )
}

export default App

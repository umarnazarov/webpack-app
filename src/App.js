import React, { useState } from 'react'

function App() {
    const [s, set] = useState(0)
    return (
        <div>
            <h1>{s}</h1>
            <button onClick={() => set(s + 1)}>+</button>
        </div>
    )
}

export default App

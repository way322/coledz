import { useState } from 'react';
import './App.css'

export function App() {
  let [text, setText] = useState(1)
  
    return (
      <>
        <button onClick={() => setText(el => el + 1)}>qqqq</button>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </>
    )
  }

export default App

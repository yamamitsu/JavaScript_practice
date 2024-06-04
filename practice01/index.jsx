import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [text, setText] = useState('Hello, World!');

    const handleClick = () => {
        if (text === 'Hello, World!') {
            setText('Button Clicked!');
        } else {
            setText('Hello, World!');
        }
    };

    return (
        <div>
            <h1>My Basic UI</h1>
            <button onClick={handleClick}>Click me</button>
            <p>{text}</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

import React, { useState } from 'react';

export default function ListState() {
  const [text, setText] = useState('');
  const [list, setList] = useState<string[]>([]);

  const handleAddition = (text:string) => {
    setList([...list, text]);
    console.log(list)
  }

  const handleReset = () => {
    setList([]);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text) {
      handleAddition(text);
      setText(''); // Clear input after addition
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
        <div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text"
              required
            />
            <button type="submit">Add to List</button>
            <br></br>
            <button onClick={handleReset}>Clear List</button>

          </form>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )

}


import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter';
import { TextValue } from './components/textValue';
import { PostItem } from './components/postItem';

function App() {
  const [likes, setLikes] = useState(0);
  const [textValue, setTextValue] = useState('');

  return (
    <div className="App">
      {/* <Counter counterValue={0}/> */}
      {/* <TextValue initialTextValue=''/> */}
      <PostItem  post = {{id: 1, title: 'title', body: 'body'}}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Button from './components/head_btn';
import Carousal from './components/carousal';
import Second from './components/d2nd';
import Sheet from './components/sheet';
import Card from './components/card';
import Card2 from './components/card2';
import Form from './components/form/form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Corporate Wellness</h1>
       <Button title="Get Connected"/>
      </header>
      <Carousal/>
      <Second/>
      <Sheet/>
      <Card/>
      <Card2/>
      <Form/>
      <footer>
      <p>Posted by: Ashish Kumar Singh</p>
      <p>Contact information: <a href="mailto:djdaydreamer.singh4@gmail.com">djdaydreamer.singh4@gmail.com</a>.</p>
     </footer>
    </div>
  );
}

export default App;

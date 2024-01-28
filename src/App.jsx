
import componetImg from './assets/components.png';

import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
// import './components/TabButton.jsx';
import TabButton from './components/TabButton';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts';



function App() {
  let [selectedTopic,setSelectedTopic ]=useState("Please click the button ");
  let tabContent="please click a button";
  function handleClick(selectedButton){
    //selectedButton should be 'componet' 'jsx' 'props';
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    // tabContent=selectedButton;
    }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts {...CORE_CONCEPTS[2]}
            />
            <CoreConcepts {...CORE_CONCEPTS[3]}
            />
          </ul>

        </section>
        <h2>Time to get started!</h2>


        <section id="examples">
          <h1>Examples</h1>
          <menu>
            <TabButton onSelect={()=>handleClick("Components")}>Component</TabButton>
            <TabButton onSelect={()=>handleClick("Props")}>Props</TabButton>
            <TabButton onSelect={()=>handleClick("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={()=>handleClick("State")}>State</TabButton>
          </menu>
          {selectedTopic}

        </section>
      </main>
    </div>
  );
}

export default App;

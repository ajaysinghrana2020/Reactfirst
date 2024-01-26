import reactImage from './assets/react-core-concepts.png';
import componetImg from './assets/components.png';
const reactDescription = ['Fundamental', 'Crucial', 'Core'];
import {CORE_CONCEPTS} from './data.js';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  return (<header>
    <img src={reactImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {reactDescription[genRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}

function CoreConcepts({image,description,title}) {
  return (
    <li>
      <img src={image} 
      alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>

  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;

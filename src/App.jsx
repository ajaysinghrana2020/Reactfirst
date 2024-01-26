import reactImage from './assets/react-core-concepts.png';
import componetImg from './assets/components.png';
const reactDescription = ['Fundamental', 'Crucial', 'Core'];

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

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.descruption} />
      <h3>{props.title}</h3>
      <p>{props.descruption}</p>
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
            <CoreConcepts title="Componets" descruption=" The core UI building Block."
            image={componetImg}  />
            <CoreConcepts title="aj" descruption=" The core UI building Block."
            image={componetImg}  />
            <CoreConcepts title="pompoom" descruption=" The core UI building Block."
            image={componetImg}  />
            <CoreConcepts title="jaja" descruption=" The core UI building Block."
            image={componetImg}  />
          </ul>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

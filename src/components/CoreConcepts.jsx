
export default function CoreConcepts({image,description,title}) {
    return (
      <li>
        <img src={image} 
        alt={description} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
  
    );
  }
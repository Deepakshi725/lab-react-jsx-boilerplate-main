import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const images = imageData();
  return (
    <div className="App">
      <h1 className="gallery-heading">Kalvium Gallery</h1>
      <div className="image-container">
      {images.map(image => (
        <img key ={image.id} src={image.img} alt={`Image ${image.id}`}/>
      ))}
      </div>
    </div>
  );
}

export default App;

import "./styles.css";

function StudentsCard({ students: { name, house, image, actor} }) {
  console.log(actor)
  return (
    <>
      <div className="card">
        
      {image === "" ? <img className="pictureOff"></img> : <img className="picture" src={image} alt={name}></img> }
        <label>
          <h4>{name}</h4>
        </label>
        <span>{house}</span>
        { actor === "" ? <span>No info</span>: <span>{actor}</span> }
  
      </div>
    </>
  );
}

export default StudentsCard;

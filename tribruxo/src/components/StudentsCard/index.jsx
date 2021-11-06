import "./styles.css";

function StudentsCard({ students: { name, house, image, actor} }) {
  return (
    <>
      <div className="card">
        <img className="picture" src={image} alt={name}></img>
        <label>
          <h4>{name}</h4>
        </label>
        <span>{house}</span>
        <span>{actor}</span>
      </div>
    </>
  );
}

export default StudentsCard;

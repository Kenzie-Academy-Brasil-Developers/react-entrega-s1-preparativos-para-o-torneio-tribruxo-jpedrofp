import { useState } from "react";
import StudentsCard from "../../components/StudentsCard";
import "./styles.css";

const Home = ({ characters }) => {
  const [triBruxos, setTriBruxos] = useState([]);
  
  function handleClick() {
  const house1 = [];
  const house2 = [];
  const house3 = [];
  const finder = characters.filter( (char) => {
    if (char.house === "Gryffindor") { house1.push(char)}
    if (char.house === "Slytherin") { house2.push(char)}
    if (char.house === "Hufflepuff") { house3.push(char)}
  })
  const random1 = Math.floor(Math.random() * (11 - 0) + 0);
  const random2 = Math.floor(Math.random() * (11 - 0) + 0);
  const random3 = Math.floor(Math.random() * (11 - 0) + 0);
  const selected1 = house1[random1]
  const selected2 = house2[random2]
  const selected3 = house3[random3]
  setTriBruxos([selected1, selected2, selected3]);}

 

  return (
    <>
      <h1>Torneio TriBrucho</h1>
      <div className="container">
        <h3>Clique no botão para encontrar os feiticeiros!</h3>

        <button className="Start" onClick={handleClick}>
          Começar
        </button>
        
        <div className="containerStudents">
        {triBruxos.map((stud) => (
          <li>
            <StudentsCard key={stud.name} students={stud} />{" "}
          </li>
        ))}
      </div>
       
      </div>
    </>
  );
};

export default Home;

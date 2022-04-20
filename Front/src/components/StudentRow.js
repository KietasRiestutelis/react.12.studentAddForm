import React from 'react'



function StudentRow({handleEditClick, name, surname, birthdate, program, group, town, id}) {
      // const [namee, setNamee] =useState({name})
      // const [surnamee, setSurnamee] =useState({surname})
      // const [birthdatee, setBirthdatee] =useState({birthdate})
      // const [programm, setProgramm] =useState({program})
      // const [groupp, setGroupp] =useState({group})
      // const [townn, setTownn] =useState({town})
      




  //Delete student
  const deleteStudent = () => {
    fetch(`http://localhost:8000/api/v1/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  //update

  
  
  //sutvarkom birthdate 
  // const birthDate = birthdate.toString().substr(0,10)

  return (
    
    <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{birthdate}</td>
        <td>{program}</td>
        <td>{town}</td>
        <td>{group}</td>
        <td><button
          type="button"
          onClick={(event) => handleEditClick(event, id)}
        >
          Edit
        </button></td>
        <td><button onClick={() =>deleteStudent(id)}>Delete</button></td>
    </tr>
    
  



  )
}

export default StudentRow
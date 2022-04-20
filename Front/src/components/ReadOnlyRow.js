import React from 'react'

function ReadOnlyRow({name, surname, birthdate, program, group, town, id, handleEditClick, deleteStudent}) {
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

export default ReadOnlyRow
import React from 'react'

function EditableRow({handleEditClick, name, surname, birthdate, program, group, town, id, handleEditFormChange,
    handleCancelClick,}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a surname..."
          name="surname"
          value={surname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a birthdate..."
          name="birthdate"
          value={birthdate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an town..."
          name="town"
          value={town}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a program..."
          name="program"
          value={program}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a group..."
          name="group"
          value={group}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <button
          type="button"
          onClick={(event) => handleEditClick(event, id)}
        >
          Edit
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditableRow
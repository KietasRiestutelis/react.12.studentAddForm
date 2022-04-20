import React, { useState, useEffect } from "react";
import StudentRow from "./StudentRow";
import { Table } from 'reactstrap';


const url = "http://localhost:8000/api/v1/students";

function StudentsTable() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getStudents = async () => {
      await fetch(url)
      .then((response) => response.json())
      .then((result) => {
          // console.log(result);
          console.log(result.length)
          //console.log(result.data);
          //console.log(result.data.students);
          setStudents(result.data.students);
          setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getStudents();
  }, []);

  if (isLoading){
      return <div>Loading...</div>
  }
  
  const studentsRow = students.map((student) => {
      return (
          <StudentRow
          key={student._id}
          id={student._id}
          name={student.name}
          surname = {student.surname}
          birthdate = {student.birthdate}
          town = {student.town}
          group = {student.group}
          program = {student.program}
          />
      );
  });

  return (
    <Table bordered>
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Birthday</th>
                <th>Town</th>
                <th>Program</th>
                <th>Group</th>
            </tr>
        </thead>
        <tbody>{studentsRow}</tbody>
    </Table>
  ) 


}
export default StudentsTable;


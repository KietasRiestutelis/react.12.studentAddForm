import React from "react";
import { useForm } from "react-hook-form";
import "./StudentAddForm.css";

export default function StudentAddForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    fetch('http://localhost:8000/api/v1/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    
    console.log(data)
  };

  // watch input value by passing the name of it
  console.log(watch("firstName"));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="Container bg-warning ">
        <div className="row ">
            <div className="col-12 ">
      <h2 className="mx-3"> Add New Student</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          {/* Vardas */}
        <div className="mb-3 mx-3">
          <label htmlFor="name" className="form-label d-flex justify-content-start">
            Vardas
          </label>
          <input
            type="text"
            className="form-control d-flex justify-content-end"
            id="name"
            {...register("name", {
                 required: true,
                 minLength: 2,
                 maxLenght: 35
                 })}
            defaultValue="Jonas"
             />
          {errors.name && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        {/* Pavarde */}
        <div className="mb-3 mx-3">
          <label htmlFor="surname" className="form-label">
            Pavardė
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            {...register("surname", {
                required: true,
                minLength: 2,
                maxLenght: 10
                })}
            defaultValue="Jonaitis"
          />
          {errors.surname && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        {/* Gimimo metai */}
        <div className="mb-3 mx-3">
          <label htmlFor="birthdate" className="form-label">
            Gimimo meta
          </label>
          <input
            type="date"
            className="form-control"
            id="birthdate"
            {...register("birthdate", { required: true })}
          />
          {errors.birthdate && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        {/* Miestas */}
        <div className="mb-3 mx-3">
          <label htmlFor="town" className="form-label">
            Miestas
          </label>
          <input
            type="text"
            className="form-control d-flex justify-content-end"
            id="town"
            {...register("town", {
                 required: true,
                 minLength: 2,
                 maxLenght: 35
                 })}
            placeholder="Vilnius"
             />
          {errors.town && (
            <span className="text-danger fw-light">This field is required</span>
          )}

          
        </div>
        {/* Programa */}
        <div className="mb-3 mx-3">
        <label htmlFor="program" className="form-label">
            Programa
          </label>
          <select {...register("program")}>
            <option value="JavaScript">JavaScript</option>
            <option value="PHP">PHP</option>
            <option value="Java">Java</option>
            <option value="Testuotojas">Testuotojas</option>
          </select>
          {errors.program && (
            <span className="text-danger fw-light">This field is required</span>
          )}
          </div>
          {/* Grupe */}
          <div className="mb-3 mx-3">
          <label htmlFor="group" className="form-label">
            Grupe
          </label>
          <select {...register("group")}>
            <option value="JS/21">JS/21</option>
            <option value="PHP/21">PHP/21</option>
            <option value="Java/21">Java/21</option>
            <option value="Testuotojas/21">Testuotojas/21</option>
          </select>
          {errors.group && (
            <span className="text-danger fw-light">This field is required</span>
          )}
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-success mb-2 my-4 mx-3">
                 Add Student
              </button>
            </div>
          </div>
      </form>
              
            </div>
        </div>
    </div>
   
  );
}
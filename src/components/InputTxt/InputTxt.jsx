import React, { useState } from "react";
import { reduxForm } from "redux-form";
import style from "./InputTxt.module.scss";

const InputTxt = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }  

  const submitTask = (e) => {
    addTask(userInput);
    setUserInput('');
  };

  return (
   <TaskFrom onSubmit={submitTask} handleChange={handleChange} userInput={userInput}/>
  );
};

const addTaskForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.inputTxt}>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="New Task"
          onChange={ props.handleChange }
          value={props.userInput}
          id="addNewTaskInput"
        ></input>
      </div>
    </form>
  )
}

const TaskFrom = reduxForm({form: 'add-task'})(addTaskForm);

export default InputTxt;

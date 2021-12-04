import React, { useState } from "react";
import style from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Task = ({ title, check, id, toggleCheck, removeTask }) => {
  const [beforeDel, setBeforeDel] = useState(false);

  const doneTask = () => {
    toggleCheck(id, title, check);
  };

  const remove = () => {
    if (window.confirm("Are you sure wanted to delete this task?")) {
      setBeforeDel(true);
      setTimeout(() => {
        removeTask(id);
      }, 400);
    }
  };

  return (
    <div className={`${style.task} ${beforeDel && style.beforeDel}`}>
      <div className={style.task__title}>
        <span onClick={doneTask} className={style.task__check}>
          {check && <FontAwesomeIcon icon={faCheck} />}
        </span>
        <h3 onClick={doneTask} className={check ? style.check : ""}>
          {title}
        </h3>
      </div>
      <div className={style.task__buttons}>
        <button className={style.removeBtn} onClick={remove}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default Task;

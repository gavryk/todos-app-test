import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '..';
import { deleteTask, setDone } from '../../redux/actions/tasks';
import style from './TaskList.module.scss';

const TaskList = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ tasks }) => tasks.items);

    const toggleCheck = (id, title, check) => {
        dispatch(setDone(id, title, check));
    }

    const removeTsk = (id) => {
        dispatch(deleteTask(id));
    }

    return (
        <div className={ style.taskListWrapper }>
            {
                items.map((task, index) => {
                    return(
                        <Task 
                            {...task}
                            key={`${task.title}_${index}`} 
                            toggleCheck={ toggleCheck }
                            removeTask={ removeTsk }
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskList

import axios from "axios";
//"server": "npx json-server --watch db.json --port=3001"

export const fetchTasks = () => {
    return async dispatch => {
        await axios.get(`/tasks`)
            .then(({ data }) => {
                dispatch(setTask(data));
            })
    }
}

export const postTasks = (task) => {
    return async dispatch => {
        let { data } = await axios.post(`/tasks`, task);
        dispatch(addTask(data));
    }
}

export const setDone = (id, title, check) => {
    return async dispatch => {
        const newTask = {
            id: id,
            title: title,
            check: !check
        }
        await axios.put(`/tasks/${id}`, newTask).then(({data}) => {
            dispatch(setCheck(id));
        })
    }
}

export const deleteTask = (id) => {
    return async dispatch => {
        axios.delete(`/tasks/${id}`).then(({ data }) => {
            dispatch(removeTask(id));
        });
    }
}

export const setTask = (items) => {
    return {
        type: 'SET_TASKS',
        payload: items
    }
}

export const addTask = (obj) => {
    return {
        type: 'ADD_TASK',
        payload: obj
    }
}

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        payload: id
    }
}

export const setCheck = (id) => {
    return {
        type: 'SET_CHECK',
        payload: id
    }
}
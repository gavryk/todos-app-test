const initState = {
    items: [] 
}

const tasks = (state = initState, action) => {
    switch(action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                items: [...state.items.filter(task => task.id !== action.payload)]
            }        
        case 'SET_CHECK':
            return {
                ...state,
                items: state.items.map(task => {
                    if(task.id === action.payload) {
                        return {...task, check: !task.check}
                    }
                    return task;
                })  
            }    
        default:
            return state;
    }
}

export default tasks;
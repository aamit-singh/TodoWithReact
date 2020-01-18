const initState = {
    tasks : [],
    dones : []
}


const rootReducer = (state = initState , action) => {
    if(action.type === 'updateTasks'){
        return {
            ...state,
            tasks : [...action.task]
        }
    }

    if(action.type === 'updateDones'){
        return {
            ...state,
            dones : [...action.dones]
        }
    }
    return state;
}

export default rootReducer
const initState = {
    tasks : []
}


const rootReducer = (state = initState , action) => {
    if(action.type === 'updateTasks'){
        console.log(action)
        return {
            ...state,
            tasks : action.task
        }
    }
    return state;
}

export default rootReducer
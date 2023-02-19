import { createContext, useReducer } from "react";


const memoryReducer = (state, action) => {
    switch (action.type) {
        case "GET_ALL_MEMORIES":
            return { ...state, memories: [...action.payload] }
        case "GET_SINGLE_MEMORY":
            const memory = state.memories.filter(mem => mem._id === action.payload._id)
            return { ...state, memories: [memory] }
        case "DELETE_MEMORY":
            return { ...state, memories: [state.filter(mem => mem._id !== action.payload)] }
        case "ADD_MEMORY":
            return { ...state, memories: [action.payload, ...state.memories] }
        default:
            return state
    }
}


export const MemoryContext = createContext();
const initialState = {
    memories: [],
}
export const MemoryContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(memoryReducer, initialState)
    return (
        <MemoryContext.Provider value={{ state, dispatch }}>
            {children}
        </MemoryContext.Provider>
    )

}


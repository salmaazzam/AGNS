import { createContext, useReducer } from 'react'

export const IndividualContext = createContext()

export const individualReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INDIVIDUALTRAINEE':
      return { 
        individualtrainees: action.payload 
      }
    case 'CREATE_INDIVIDUALTRAINEE':
      return { 
        individualtrainees: [action.payload, ...state.individualtrainees] 
      }
      case 'DELETE_INDIVIDUALTRAINEE':
      return { 
        individualtrainees: state.individualtrainees.filter(i => i._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const IndividualContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(individualReducer, { 
    individualtrainees: null
  })
  
  return (
    <IndividualContext.Provider value={{ ...state, dispatch }}>
      { children }
    </IndividualContext.Provider>
  )
}
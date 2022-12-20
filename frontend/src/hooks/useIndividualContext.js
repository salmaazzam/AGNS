import { IndividualContext } from "../context/IndividualContext"
import { useContext } from "react"

export const useIndividualContext = () => {
  const context = useContext(useIndividualContext)

  if(!context) {
    throw Error('useIndividualContext must be used inside an IndividualContextProvider')
  }

  return context
}
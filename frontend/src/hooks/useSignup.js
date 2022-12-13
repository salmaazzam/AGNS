import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const[error, setError] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (firstName,lastName, username, email, password, gender) => {
        setIsLoading(true)
        setError(null)
    
    const response =await fetch('/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({firstName,lastName, username, email, password, gender})
    })

    const json= await response.json()

    if(!response.ok){
        setIsLoading(false)
        setError(json.error)
    }
    if(response.ok){
        localStorage.setItem('user', JSON.stringify(json))

        dispatch({type: 'LOGIN', payload: json})

        setIsLoading(false)
    }

    }
    return {signup, isLoading, error}
}
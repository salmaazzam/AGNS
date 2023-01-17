import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'
export const useLogin = () => {
    const[error, setError] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    const[type,setType]=useState('')

    const {dispatch} = useAuthContext()
    const Navigate = useNavigate();

    const login = async ( username,password) => {
        setIsLoading(true)
        setError(null)
    
    const response =await fetch('/auth/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username,password})
    })

    const json= await response.json()
    console.log(json.type)
    if(!response.ok){
        setIsLoading(false)
        setError(json.error)
    }
    if(response.ok){
        localStorage.setItem('user', JSON.stringify(json))
        setType(json.type)
       // type=json.type
        console.log(type +'1111111')
        dispatch({type: 'LOGIN', payload: json})

        setIsLoading(false)
    }

    }
    return {login, isLoading, error,type}
}
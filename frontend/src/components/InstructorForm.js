import { useState } from 'react'
import { useInstructorsContext } from "../hooks/useInstructorsContext"
const InstructorForm = () => {
  const { dispatch } = useInstructorsContext()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const instructor = {name, username, password}
    
    const response = await fetch('/instructor', {
      method: 'POST',
      body: JSON.stringify(instructor),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setName('')
      setUsername('')
      setPassword('')
      console.log('new instructor is inserted:', json)
      dispatch({type: 'CREATE_INSTRUCTOR', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Instructor</h3>

      <label>Full name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Username:</label>
      <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
        className={emptyFields.includes('username') ? 'error' : ''}
      />

      <label>Password (8 Characters minimum):</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        className={emptyFields.includes('password') ? 'error' : ''}
      />

      <button>Add Instructor</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default InstructorForm
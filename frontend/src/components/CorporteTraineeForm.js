import { useState } from 'react'
import { useCorporateTraineesContext } from "../hooks/useCorporateTraineesContext"

const CorporateTraineeForm = () => {
  const { dispatch } = useCorporateTraineesContext()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const corporateTrainee = {name, username, password}
    
    const response = await fetch('/corporatetrainee', {
      method: 'POST',
      body: JSON.stringify(corporateTrainee),
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
      console.log('new corporate trainee is inserted:', json)
      dispatch({type: 'CREATE_CORPORATETRAINEE', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Corporate Trainee</h3>

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

      <button>Add Corporate Trainee</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CorporateTraineeForm
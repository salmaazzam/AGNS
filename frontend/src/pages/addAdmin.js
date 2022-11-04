import { useEffect, useState } from "react"

const addAdmin = () => {
    const [admins, setAdmins] = useState(null)
  
    useEffect(() => {
      const fetchAdmins = async () => {
        const response = await fetch('/api/Admin')
        const json = await response.json()
  
        if (response.ok) {
          setAdmins(json)
        }
      }
  
      fetchAdmins()
    }, [])


    return (
    <div className="Home" >
     <div className="admins">
        {admins && admins.map((admin) => (
          <p key={admin._id}>{admin.username} </p>
        ))}
      </div>
    </div>
    )
}

export default addAdmin
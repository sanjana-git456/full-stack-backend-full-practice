import { useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [token, setToken] = useState('')

  const login = async () => {
    const res = await axios.post('http://localhost:3000/api/login', {
      email: 'new@gmail.com',
      password: '123456'
    })
    setToken(res.data.token)
    alert('Logged in! Token saved')
  }

  const getUsers = async () => {
    const res = await axios.get('http://localhost:3000/api/users', {
      headers: { authorization: token }
    })
    setUsers(res.data)
  }

  return (
    <div>
      <h1> Fullstack App </h1>
      <button onClick={login}>Login</button>
      <button onClick={getUsers}>Get Users</button>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
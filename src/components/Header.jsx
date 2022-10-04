mport React from 'react'
import { Link } from "react-router-dom"

export default function Header(props) {
  return (
    <nav className="nav">
      
      <ul>
        <Link to="/notes">
            <li>Notes</li>
        </Link>
        <Link to = "">
          <li>Login</li>
        </Link>    
          <Link to = "">
          <li>Register</li>
        </Link>
      </ul>
      
    </nav>
  )
}



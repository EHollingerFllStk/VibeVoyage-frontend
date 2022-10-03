import React from 'react'
import { Link } from "react-router-dom"

export default function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>VibeVoyage</div>
      </Link>
    </nav>
  )
}
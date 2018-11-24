import React from 'react'
import { Link } from 'gatsby'
import { Instagram } from './instagram'
import { Facebook } from './Facebook'

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="has-text-weight-bold is-size-2">Dōna Flor</div>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end is-flex">
        <a
          className="navbar-item"
          href="https://www.instagram.com/donaflor.music/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <Instagram className="has-fill-white" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.facebook.com/donaflor.music/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <Facebook className="has-fill-white" />
          </span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar

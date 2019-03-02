import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Instagram } from './Instagram'
import { Facebook } from './Facebook'
import { setConfig } from 'react-hot-loader'
import { Youtube } from './Youtube'

setConfig({ pureSFC: true })

const Navbar = () => {
  const [isActive, setActive] = useState(false)
  const toggleMenu = () => setActive(!isActive)
  return (
    <nav
      className="navbar has-background-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" onClick={() => setActive(false)}>
          <div className="has-text-weight-bold is-size-4">Dōna Flor</div>
        </Link>

        <span
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div className={`navbar-menu has-background-black ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/about" onClick={() => setActive(false)}>
            About
          </Link>
          <Link className="navbar-item" to="/music" onClick={() => setActive(false)}>
            Music
          </Link>
          <Link className="navbar-item" to="/contact" onClick={() => setActive(false)}>
            Contact
          </Link>
          <Link className="navbar-item" to="/news" onClick={() => setActive(false)}>
            News
          </Link>
        </div>

        <div className="navbar-end">
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
          <a
            className="navbar-item"
            href="https://www.youtube.com/channel/UCnXYjBt-BaLp4V72kfv-g8w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <Youtube className="has-fill-white" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

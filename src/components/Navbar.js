import React, { useState } from 'react'
import { Link } from 'gatsby'
import { setConfig } from 'react-hot-loader'

setConfig({ pureSFC: true })

const Navbar = () => {
  const [height, setHeight] = useState(80)
  const isCollapsed = height === 80
  const setIframeHeight = () => (isCollapsed ? setHeight(400) : setHeight(80))
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
        <div className="navbar-end">
          <iframe
            src="https://open.spotify.com/embed/album/7sgfM3mY2L8NzyGI8iqiDG"
            width="300"
            height={height}
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <button onClick={setIframeHeight}>{isCollapsed ? 'More' : 'Hide'}</button>
        </div>
    </nav>
  )
}

export default Navbar

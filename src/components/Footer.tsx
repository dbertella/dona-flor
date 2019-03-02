import React, { useState } from 'react'
import { setConfig } from 'react-hot-loader'

setConfig({ pureSFC: true })

const Footer = () => {
  const [height, setHeight] = useState(80)
  const isCollapsed = height === 80
  const setIframeHeight = () => (isCollapsed ? setHeight(400) : setHeight(80))
  return (
    <footer className="is-flex" style={{ height }}>
      <iframe
        src="https://open.spotify.com/embed/album/7sgfM3mY2L8NzyGI8iqiDG"
        width="100%"
        height={height}
        frameBorder="0"
        allow="encrypted-media"
        title="Alma Desnuda - Dōna Flor"
      />
      <button
        className="has-text-white has-background-black button-playlist"
        onClick={setIframeHeight}
      >
        {isCollapsed ? 'More' : 'Hide'}
      </button>
    </footer>
  )
}
export default Footer

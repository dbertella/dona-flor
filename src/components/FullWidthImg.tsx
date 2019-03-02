import React from 'react'
import styled from 'styled-components'

export const FullWidthImg = styled.div`
  height: 400px;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`

export default ({ image }) => (
  <FullWidthImg
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`
    }}
  />
)

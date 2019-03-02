import React from 'react'
import styled from 'styled-components'
import Img, { GatsbyImageProps } from 'gatsby-image'

export const FullWidthImg = styled(Img)`
  height: 400px;
  margin-top: 0;
`

export default ({ image }: { image: { childImageSharp: GatsbyImageProps } }) => {
  if (!image) {
    return null
  }
  if (typeof image === 'string') {
    return <img src={image} alt="" />
  }
  return <FullWidthImg fluid={image.childImageSharp.fluid} alt="" />
}

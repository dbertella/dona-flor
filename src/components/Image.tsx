import React from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'

export const Image = ({ image }: { image: { childImageSharp: GatsbyImageProps } }) => {
  if (!image) {
    return null
  }
  if (typeof image === 'string') {
    return <img src={image} alt="" />
  }
  return (
    <Img
      fluid={image.childImageSharp.fluid}
      alt=""
    />
  )
}

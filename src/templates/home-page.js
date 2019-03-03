import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import { Image } from '../components/Image'
import styled from 'styled-components'

const Logo = styled.div`
  width: 320px;
  max-width: 100%;
`

export const HomePageTemplate = ({ title, logo, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <section className="section">
      <Helmet>
        <style type="text/css">{`
          body {
            background-image: url(${
              typeof image !== 'string' ? image.childImageSharp.fluid.src : image
            });
          }
        `}</style>
      </Helmet>
      <div className="container">
        <div className="content">
          <Logo className="is-hidden-mobile">
            <Image image={logo} alt={title} title={title} />
          </Logo>
          <div className="columns">
            <div className="column is-one-third">
              <div className="card bg">
                <div className="card-content home-text">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object]),
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      logo={post.frontmatter.logo}
      content={post.html}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo {
          childImageSharp {
            fluid(maxWidth: 320, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

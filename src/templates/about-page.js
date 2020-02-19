import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import FullWidthImg from '../components/FullWidthImg'
import Helmet from 'react-helmet'

export const AboutPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <Helmet titleTemplate="%s | Dōna Flor">
        <title>{title}</title>
      </Helmet>
      <FullWidthImg image={image} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h2 className="title is-size-3 has-text-dark has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
      }
    }
  }
`

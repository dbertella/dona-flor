import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <Helmet>
        <style type="text/css">{`
          body {
            background-image: url(${
              typeof image !== 'string' ? image.childImageSharp.fluid.src : image
            });
            background-size: cover;
          }
        `}</style>
      </Helmet>
      <div className="container">
        <div className="content">
          <h2 className="title is-size-3 has-text-white has-text-weight-bold is-bold-light is-hidden-touch">
            {title}
          </h2>
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
      }
    }
  }
`

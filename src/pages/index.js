import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SpotifyPlayer from 'react-spotify-player'

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300
}
const view = 'list' // or 'coverart'
const theme = 'black' // or 'white'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div class="columns">
                <div class="column is-one-third">
                  <div class="card bg">
                    <div class="card-content">
                      Dōna Flor è nomadismo di piedi, musica e colore. È atlantica: navi
                      la percorrono in lungo e in largo. È una diaspora di fiori, viaggi,
                      racconti.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

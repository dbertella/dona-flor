import React from 'react'
import BlogRoll from '../components/BlogRoll'
import styled from 'styled-components'

const Relative = styled.div`
  position: relative;
`
const Grid = styled.div`
  @media (min-width: 1088px) {
    grid-template-columns: 320px 320px 320px;
  }
  grid-template-columns: 320px;
  grid-template-rows: 320px;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
`
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 270px;
  overflow: auto;
  padding: 1rem;
  transform: translateY(100%);
  background: rgba(0, 0, 0, 0.9);
  font-size: 0.9rem;
  transition: transform 0.5s ease-in-out;
`

const Card = styled(Relative)`
  position: relative;
  height: 320px;
  width: 320px;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      transform: translateY(0%);
    }
  }
`
export default class BlogIndexPage extends React.Component {
  render() {
    const { allInstaNode } = this.props.data
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="column is-10 is-offset-1">
                <div className="section bg">
                  <h2 className="title is-size-3 has-text-white has-text-weight-bold is-bold-light">
                    Eventi e Concerti
                  </h2>
                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section bg">
                  <h2 className="title is-size-3 has-text-white has-text-weight-bold is-bold-light">
                    Updates
                  </h2>
                  <Grid>
                    {allInstaNode.edges.map(({ node }) => (
                      <Card key={node.id}>
                        <img src={node.thumbnails[2].src} alt={node.caption} />
                        <Overlay>
                          <div>{node.caption}</div>
                        </Overlay>
                      </Card>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export const BlogIndexPageQuery = graphql`
  query BlogIndexPage {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

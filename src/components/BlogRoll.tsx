import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

type EdgeNode = {
  id: string
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    templateKey: string
    date: string
  }
}

type BlogRollProps = {
  data: {
    allMarkdownRemark: {
      edges: { node: EdgeNode }[]
    }
  }
}
class BlogRoll extends React.Component<BlogRollProps, {}> {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article className="tile is-child box notification">
                <p>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small className="subtitle">
                    {post.frontmatter.date}
                  </small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Continua a leggere →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt(pruneLength: 400)
              frontmatter {
                title
                templateKey
                date(formatString: "DD.MM.YYYY")
              }
            }
          }
        }
      }
    `}
    // @ts-ignore
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

import React from 'react'
import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="column is-10 is-offset-1">
              <div className="section bg">
                <h2 className="title is-size-3 has-text-white has-text-weight-bold is-bold-light">
                  Eventi e Concerti
                </h2>
              </div>
            </div>
          </div>
          <BlogRoll />
        </div>
      </section>
    )
  }
}

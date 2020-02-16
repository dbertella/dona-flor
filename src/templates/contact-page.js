import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import { navigate } from "gatsby";
import FullWidthImg from "../components/FullWidthImg";
import Helmet from "react-helmet";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
          onChange={this.handleChange}
        />
        <p className="is-invisible">
          <label htmlFor="field">
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="field">
          <label className="label" htmlFor="name">Nome</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="e.g Ceci Brown"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <div className="control">
            <input
              name="email"
              className="input"
              type="email"
              placeholder="e.g. ceci@gmail.com"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="messaggio">Messaggio</label>
          <div className="control">
            <textarea
              name="messaggio"
              className="textarea"
              placeholder="Scrivi qui"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" type="submit">
            Invia il messaggio
          </button>
        </div>
      </form>
    );
  }
}

export const ContactPageTemplate = ({
  title,
  image,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

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
              <h2 className="title is-size-3 has-text-white has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      content={post.html}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
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
`;

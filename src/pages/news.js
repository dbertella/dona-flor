import React, { useState, useEffect } from "react";
import BlogRoll from "../components/BlogRoll";
import styled from "styled-components";

const Relative = styled.div`
  position: relative;
`;
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
`;
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 270px;
  overflow: auto;
  padding: 1rem;
  transform: translateY(100%);
  background: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  transition: transform 0.5s ease-in-out;
`;

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
`;

const IG_ID = `6773082462`; // `donaflor.music`,

// https://github.com/oorestisime/gatsby-source-instagram/blob/master/src/instagram.js
const igUrl = (username) =>
  `https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${username}","first":12,"after":null}`;

const BlogIndexPage = () => {
  // const [allInsta, setAllInsta] = useState([]);
  // useEffect(() => {
  //   fetch(igUrl(IG_ID))
  //     .then((j) => j.json())
  //     .then(({ data }) => {
  //       const photos = [];
  //       data.user.edge_owner_to_timeline_media.edges.forEach((edge) => {
  //         if (edge.node) {
  //           photos.push({
  //             id: edge.node.id,
  //             thumbnail: edge.node.thumbnail_resources[2].src,
  //             caption: edge.node.edge_media_to_caption.edges[0].node.text,
  //           });
  //         }
  //       });
  //       setAllInsta(photos);
  //     });
  // }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="column is-10 is-offset-1">
              <h2 className="title is-size-3 has-text-dark has-text-weight-bold is-bold-light">
                Eventi e Concerti
              </h2>
              <BlogRoll />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Grid>
                {allInsta.map(({ id, thumbnail, caption }) => (
                  <Card key={id}>
                    <img src={thumbnail} alt={caption} />
                    <Overlay>
                      <div>{caption}</div>
                    </Overlay>
                  </Card>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BlogIndexPage;

// export const BlogIndexPageQuery = graphql`
//   query BlogIndexPage {
//     allInstaNode {
//       edges {
//         node {
//           id
//           # likes
//           comments
//           original
//           timestamp
//           caption
//           localFile {
//             childImageSharp {
//               fixed(width: 150, height: 150) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//           # Only available with the public api scraper
//           thumbnails {
//             src
//             config_width
//             config_height
//           }
//           dimensions {
//             height
//             width
//           }
//         }
//       }
//     }
//   }
// `;

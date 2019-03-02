module.exports = {
  siteMetadata: {
    title: 'Nomadismo Musicale | Dona Flor',
    description:
      '💃🏻Dōna Flor è un musica di frontiera, che si muove tra la tradizione e una "free etnomusic" con contaminazioni sudamericane, atmosfere gitane, blues e jazz.'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout.tsx')
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `donaflor.music`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dona Flor',
        short_name: 'Dona Flor',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        icons: [
          {
            src: 'static/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'static/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/img/favicon-32x32.png' // This path is relative to the root of the site.
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}

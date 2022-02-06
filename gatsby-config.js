/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "",
  siteMetadata: {
    title: `Codified Musings by jordan a haines`,
    description: `The little slice of the internet that belongs to JordanAHaines`,
    siteUrl: `https://codifiedmusings.com`,
    home: {
      title: `Hi! I'm Jordan`,
      description: `I like to teach, write, code, and jest. This website is my safe place to do all of that.`,
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5ea5f779cae9eCF_Domain_verify` 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43556170-3",
        head: true,
      }
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode'
  ],
}

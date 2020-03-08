module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Forty V2',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Forty by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FED136',
        theme_color: '#FED136',
        display: 'minimal-ui',
        icon: 'src/assets/images/wbb-square-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}

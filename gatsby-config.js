module.exports = {
  siteMetadata: {
    title: `Engenharia`,
    description: `A AYO é uma empresa que atua no ramo da engenharia civil e tem como missão entregar e realizar projetos de construção que atendam as necessidades de seus clientes.`,
    author: `Cefas Garcia Pereira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ayo`,
        short_name: `ayo`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#20336C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },

    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Mark Dodson',
    description:
      'Mark Dodson is a full-stack web developer based just outside of Melbourne.',
    siteUrl: 'https://markyjd.com',
    image: '/og.png',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};

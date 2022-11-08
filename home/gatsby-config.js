module.exports = {
  siteMetadata: {
    title: `Jesse Pajuaar Therapy Studios`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;1,400;1,500&family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,400&family=Playfair+Display:wght@600;700;800;900&display=swap`,
          },
        ],
      },
    },
  ], 
};
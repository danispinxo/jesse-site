module.exports = {
  siteMetadata: {
    title: `Jesse Pajuaar Therapy Studios`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
  ]
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@remix-run/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};
require("ts-node").register()

module.exports = {
  siteMetadata: {
    title: "Donkey",
    author: "applejam",
    url: "https://donkey-app.surge.sh",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-typegen",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Donkey",
        short_name: "Donkey",
        start_url: "/",
        background_color: "#69b9a3",
        theme_color: "#69b9a3",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}

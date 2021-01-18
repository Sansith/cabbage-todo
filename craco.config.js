const CracoLessPlugin = require("craco-less");
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#8f0a67",
              "@font-size-base": "30px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

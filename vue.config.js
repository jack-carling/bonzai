module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";@import "~@/styles/typography.scss";@import "~@/styles/components.scss";@import "~@/styles/icons.scss";`,
      },
    },
  },
};

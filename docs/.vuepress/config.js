module.exports = {
  bundler: "@vuepress/bundler-vite",
  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [require("tailwindcss")],
        },
      },
    },
  },
};

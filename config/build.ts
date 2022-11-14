// Build Configuration (https://go.nuxtjs.dev/config-build)
const build: any = {
  corejs: "3",
  extend(config) {
    if (config && config.module) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      });
    }
  }
};

export { build };

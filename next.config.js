module.exports = {
  i18n: {
    // locales: ["en", "es"],
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["upload.wikimedia.org", "ik.imagekit.io", "res.cloudinary.com"],
    loader: "cloudinary",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  semi: true,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};

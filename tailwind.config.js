// tailwind.config.js
module.exports = {
  // ...
  purge: ['./src/**/*.js'],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};

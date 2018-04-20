// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    precss: {},
    'postcss-write-svg': { utf8: false },
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 2,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 5,
      mediaQuery: false
    },
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    },
    autoprefixer: {}
  }
}

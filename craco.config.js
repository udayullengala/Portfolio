const path = require('path')

module.exports = {
  reactScriptsVersion: 'react-scripts',
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')],
        },
      },
    },
  },
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  }
}

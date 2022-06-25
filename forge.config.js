const join = require('path').join

module.exports = {
  packagerConfig: {
    asar: {
      unpack: '**/node_modules/node-notifier/vendor/**'
    },
    extraResource: 'build/',
    icon: join(__dirname, '/build/icon.ico'),
    overwrite: true,
    // ignore file to be packaged
    ignore: [
      'forge.config.js',
      '.gitignore',
      '.eslintrc.json',
      '.eslintignore',
      '.github'
    ]
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'pomodoro',
        iconUrl: join(__dirname, '/build/icon.ico'),
        setupIcon: join(__dirname, '/build/icon.ico'),
        loadingGif: join(__dirname, '/build/Loading.gif')
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: [
        'darwin'
      ]
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: join(__dirname, '/build/icon.ico'),
          name: 'Pomodoro',
          productName: 'Pomodoro'
        }
      }
    }
  ]
}

module.exports = {
  pwa: {
    name: 'Github Explorer',
    themeColor: '#e5e5e5',
    msTileColor: '#3a3a3a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'GenerateSW',
    manifestOptions: {
      name: 'Github Explorer',
      short_name: 'GitEx',
      start_url: 'http://github-explorer-vue.surge.sh/',
      display: 'standalone',
      theme_color: '#e5e5e5'
    },
    iconPaths: {
      favicon32: 'favicon/favicon-32x32.png',
      favicon16: 'favicon/favicon-16x16.png',
      appleTouchIcon: 'favicon/apple-touch-icon.png',
      maskIcon: 'favicon/safari-pinned-tab.svg',
      msTileImage: 'favicon/android-chrome-512x512.png'
    }
  }
}

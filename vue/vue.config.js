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
      start_url: '.',
      display: 'standalone',
      theme_color: '#e5e5e5'
    }
  }
}

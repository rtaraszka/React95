module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Avatar/Avatar.js',
          'src/components/Button/Button.js',
          'src/components/Checkbox/Checkbox.js',
          // 'src/components/Cutout/Cutout.js',
          'src/components/Progress/Progress.js',
          'src/components/Icon/LogoIcon.js',
          'src/components/TextField/TextField.js',
          'src/components/Window/Window.js',
          'src/components/WindowHeader/WindowHeader.js',
          'src/components/WindowContent/WindowContent.js'
        ]
      },
      {
        name: 'AppBar component',
        include: [
          'src/components/AppBar/AppBar.js',
          'src/components/Bar/Bar.js',
          'src/components/Toolbar/Toolbar.js'
        ]
      }
    ]
  },
  name: 'React 95'
};

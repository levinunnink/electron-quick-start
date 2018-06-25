// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {desktopCapturer} = require('electron')
  
desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
  if (error) throw error
  for (let i = 0; i < sources.length; ++i) {
    console.log('Source', sources[i])
  }
})

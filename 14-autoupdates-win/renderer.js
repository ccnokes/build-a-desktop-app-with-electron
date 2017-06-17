const versionEl = document.querySelector('#version');
versionEl.innerText = require('./package.json').version;
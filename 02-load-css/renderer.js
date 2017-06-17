const versionEl = document.querySelector('#version');
versionEl.innerText = process.versions.electron;
console.log(process.versions);

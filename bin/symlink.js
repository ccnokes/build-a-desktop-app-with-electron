const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '../');

// run it relative to the root of the project
process.chdir(root);

function symlinkAll() {
  const lessons = fs.readdirSync(root)
    .filter(f => !/images|bin|node_modules|\.git.*|.*\.md|.*\.json|\.DS_Store|.*\.log/.test(f))
    .forEach(f => {
      console.log(`Symlinking ${f}`);
      fs.symlink('../node_modules', `${f}/node_modules`, 'junction', (err) => {
        if(err) {
          console.error(err);
        }
      });
    });
}

symlinkAll();

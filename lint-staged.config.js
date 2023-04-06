const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // This will lint and format TypeScript and                                             //JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    buildEslintCommand(filenames),
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
}

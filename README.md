[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# pixel-ui

UI component library

## Requirements

- pnpm ^6.32.1

## Install

Storybook currently requires package hoisting: https://github.com/storybookjs/builder-vite/issues/55

`pnpm i --shamefully-hoist -r`

## Start

`pnpm dev`

## Folders

| Folder name | Description                      |
| ----------- | -------------------------------- |
| Libraries   | Contains dev dependencies        |
| Packages    | Contains package to be published |

## Defining Stories

- In dev mode, each package should generate/build artifacts for storybook stories to work.
- This files can then be imported in `main.stories.ts`

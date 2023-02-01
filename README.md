[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# pixel-io

UI component library

## Requirements

- pnpm ^7.22.0

## Install

`pnpm i`

## Start

`pnpm dev`

## Test

`pnpm test`

## Folders

| Folder name | Description                      |
| ----------- | -------------------------------- |
| Libraries   | Contains dev dependencies        |
| Packages    | Contains package to be published |

## Defining Stories

- In dev mode, each package should generate/build artifacts for storybook stories to work.
- This files can then be imported in `main.stories.ts`

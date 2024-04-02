[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# pixel-io

UI component library

[Storybook](https://jiayike.github.io/pixel-io/?path=/docs/html-css-quick-start--docs)

## Requirements

- pnpm ^8.15.6

## Install

```sh
pnpm i
pnpm i -F <package name> # install for specific package
```

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

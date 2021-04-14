# Create React App + Typescript + Storybook + TailwindCSS

## Visual Studio Code Extensions

Make sure to read about these extensions

- ES7 React/Redux/GraphQL/React-Native snippets
- Folder Templates
- Git Graph
- GitLens — Git supercharged
- Prettier - Code formatter
- Todo Tree

## Creating Components

Use the "Folder Templates" extension to create a new component template.
To create a new component right click on a folder, select "Create New Templated Folder", write the component's name and press enter when finished.

### Component Template

Creates a template of a React Component

### Storybook Component Template

Creates a template of a React Component with a corresponding Storybook story

## Styling

TailwindCSS should be able to cover most to all styling needs. In a case where a custom css class is needed and will be reusable, create the new class on "index.css" on the "@layer utilities". For component specific styling, create a new css file (format: "component-name.module.css") in the component's corresponding folder and import it.

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs storybook for development.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

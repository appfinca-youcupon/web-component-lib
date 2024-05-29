import "bootstrap/dist/css/bootstrap.min.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      // sort by alphanumeric
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) => {
        return a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

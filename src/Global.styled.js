import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
:root {
  --white-color: rgba(255, 255, 255, 0.9);
  --semi-white-color: rgba(255, 255, 255, 0.7);
  --black-color: rgb(0, 0, 0);

  --fiolet-color: #43225e;
  /* #131111 */

  --blue-color: #292acf;
  /* #84f0c7 */

  --green-color: #55af92;
  /* #bce464 */
}

* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}
`;

export default Global;

# styled-system

Responsive, theme-based style props for building design systems with React

## Install

```sh
npm i @andideve/styled-system
```

## Usage

```jsx
import { space, layout, typography, color } from '@andideve/styled-system';

// Add styled-system functions to your component
const Box = styled.div(space, layout, typography, color);

return <Box m={2} />;
```

[MIT License](LICENSE.md)

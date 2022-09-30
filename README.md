# styled-system

Responsive, theme-based style props for building design systems with React

## Install

```sh
npm i @andideve/styled-system @emotion/react @emotion/styled
```

## Usage

Create a new component

```jsx
import styled from '@emotion/styled';
import { space, layout, typography, color } from '@andideve/styled-system';

// Add styled-system function(s) to your component
const Box = styled.div(space, layout, typography, color);

return <Box m={2} />;
// margin: theme.space[2]
// margin: 2px
```

### Custom Props

```jsx
import { system, ThemeKey } from '@andideve/styled-system';

// Define system config
const config = {
  rounded: {
    property: 'borderRadius',
    scale: ThemeKey.radii,
  },
  // ...
};

// Create a new style prop function
const borderRadius = system(config);

// Add styled-system function(s) to your component
const Box = styled.div(borderRadius);

return <Box rounded={6} />;
// borderRadius: theme.radii[6]
// borderRadius: 6px
```

### Extending Styled System

```jsx
import { compose } from '@andideve/styled-system';

// ...

// Combine multiple style prop functions into one
const systemProps = compose(space, layout, typography, color, borderRadius);

// Add styled-system function(s) to your component
const Box = styled.div(systemProps);
```

### Removing props from HTML elements

```jsx
import { createSfp } from '@andideve/styled-system';

// ...

const shouldForwardProp = createSfp(systemProps.propNames);

// Pass **shouldForwardProp** as filtering option arg.
const Box = styled('div', { shouldForwardProp })(systemProps);
```

[MIT License](LICENSE)

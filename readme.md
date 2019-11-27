# React `WithSeparator`

Add a separator between each element.

## Installation

```sh
npm install --save react-with-separator
```

## Usage

```js
const WithSeparator = require('react-with-separator')

const React = require('react')
const { render } = require('react-dom')

const Footer = ({ username }) => (
  <WithSeparator separator=' | '>
    (!username && (
      <a href='/login'>Login</a>
    ))

    (username && (
      <a href='/logout'>Logout</a>
    ))

    <a href='/help'>Help</a>
  </WithSeparator>
)

render(<Footer username='linusu' />)
```

Will render something like this:

```text
 Logout | Help
```

## Props

### `separator`

- required
- type: `ReactElement` or `string`

The element or string to insert between each child element.

### `leading`

- optional
- type: `boolean`

Whether to insert a leading separator or not.

### `trailing`

- optional
- type: `boolean`

Whether to insert a trailing separator or not.

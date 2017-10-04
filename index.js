'use strict'

const React = require('react')

module.exports = function WithSeparator (props) {
  const children = React.Children.toArray(props.children)

  for (let i = 1; i < children.length; i += 2) {
    children.splice(i, 0, props.separator)
  }

  return children
}

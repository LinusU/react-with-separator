'use strict'

var React = require('react')

function createSeparator (separator, idx) {
  if (typeof separator === 'string') {
    return separator
  }

  return React.cloneElement(separator, { key: `separator-${idx}` })
}

module.exports = function WithSeparator (props) {
  var children = React.Children.toArray(props.children)

  for (var i = 1; i < children.length; i += 2) {
    children.splice(i, 0, createSeparator(props.separator, (i - 1) / 2))
  }

  return children
}

import { FC, ReactElement } from 'react'

declare interface Props {
  /** The element or string to insert between each child element. */
  separator: ReactElement<any> | string
  /** Whether to insert a leading separator or not. */
  leading?: boolean
  /** Whether to insert a trailing separator or not. */
  trailing?: boolean
  /** The children to insert separators between */
  children?: React.ReactNode
}

declare const WithSeparator: FC<Props>

export = WithSeparator

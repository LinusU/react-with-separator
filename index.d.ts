import { ReactNode, ReactElement, StatelessComponent } from 'react'

declare interface WithSeparatorProps {
  children?: ReactNode
  leading?: boolean
  separator: string | ReactElement<any>
  trailing?: boolean
}

declare const WithSeparator: StatelessComponent<WithSeparatorProps>

export = WithSeparator

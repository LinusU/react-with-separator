import { ReactNode, ReactElement, StatelessComponent } from 'react'

declare interface WithSeparatorProps {
  children?: ReactNode
  separator: string | ReactElement<any>
}

declare const WithSeparator: StatelessComponent<WithSeparatorProps>

export = WithSeparator

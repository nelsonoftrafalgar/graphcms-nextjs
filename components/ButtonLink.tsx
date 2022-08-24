import { FC, PropsWithChildren } from 'react'

import Link from 'next/link'
import classnames from 'classnames'
import styles from 'styles/components/ButtonLink.module.scss'

type IProps = {
  modifiers: string[]
  href: string
}

const ButtonLink: FC<PropsWithChildren<IProps>> = ({ children, modifiers, href }) => {
  const stylesConfig = modifiers.reduce((acc: Record<string, boolean>, val) => {
    acc[styles[val]] = true
    return acc
  }, {})

  return (
    <Link href={href}>
      <a className={classnames(styles.button_link, stylesConfig)}>{children}</a>
    </Link>
  )
}

export default ButtonLink

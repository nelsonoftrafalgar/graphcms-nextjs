import { FC, PropsWithChildren } from 'react'

import styles from 'styles/components/Button.module.scss'

const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button className={styles.submit}>{children}</button>
}

export default Button

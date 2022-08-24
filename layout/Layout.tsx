import { FC, PropsWithChildren } from 'react'

import Header from 'layout/Header'
import styles from 'styles/Shared.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}

export default Layout

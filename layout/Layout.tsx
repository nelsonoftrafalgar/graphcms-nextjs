import { FC, PropsWithChildren } from 'react'

import Footer from 'layout/Footer'
import Header from 'layout/Header'
import styles from 'styles/Shared.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

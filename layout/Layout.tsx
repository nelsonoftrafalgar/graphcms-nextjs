import { FC, PropsWithChildren } from 'react'

import Footer from 'layout/Footer'
import Header from 'layout/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

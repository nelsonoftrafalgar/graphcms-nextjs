import { FC, PropsWithChildren } from 'react'

import Footer from 'layout/Footer'
import Header from 'layout/Header'
import ScrollWrapper from 'layout/ScrollWrapper'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ScrollWrapper>{(props) => <Header {...props} />}</ScrollWrapper>
      {children}
      <Footer />
    </>
  )
}

export default Layout

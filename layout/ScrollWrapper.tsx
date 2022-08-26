import { FC, useEffect, useState } from 'react'

import classnames from 'classnames'
import styles from 'styles/layout/ScrollWrapper.module.scss'

interface IProps {
  children: (props: { scroll: boolean }) => JSX.Element
}

const HEADER_HEIGHT = 64

const ScrollWrapper: FC<IProps> = ({ children }) => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= HEADER_HEIGHT) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (scroll) {
    return (
      <>
        <div className={classnames(styles.scrolled_wrapper)}>{children({ scroll })}</div>
        <div className={styles.placeholder} />
      </>
    )
  }

  return <>{children({ scroll })}</>
}

export default ScrollWrapper

import { useEffect, useState } from 'react'

export const useMobileNav = () => {
  const [animate, setAnimate] = useState(false)
  const [isNavOpen, toggleNav] = useState(false)

  useEffect(() => {
    if (isNavOpen) {
      setTimeout(() => {
        setAnimate(true)
      }, 100)
    } else {
      setAnimate(false)
    }
  }, [isNavOpen])

  return { animate, isNavOpen, toggleNav }
}

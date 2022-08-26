import { useEffect, useState } from 'react'

export const useMobileNav = () => {
  const [animate, setAnimate] = useState(false)
  const [isNavOpen, toggleNav] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')

    if (isNavOpen) {
      body?.classList.add('prevent_scroll')
      setTimeout(() => {
        setAnimate(true)
      }, 100)
    } else {
      body?.classList.remove('prevent_scroll')
      setAnimate(false)
    }
  }, [isNavOpen])

  return { animate, isNavOpen, toggleNav }
}

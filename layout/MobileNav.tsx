import ButtonLink from 'components/ButtonLink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classnames from 'classnames'
import styles from 'styles/layout/MobileNav.module.scss'
import { useClickOutside } from 'hooks/useClickOutside'
import { useMenuData } from 'hooks/useMenuData'
import { useMobileNav } from 'hooks/useMobileNav'
import { useState } from 'react'

enum OpenStateKeys {
  Product = 'first',
  About = 'second'
}

const MobileNav = () => {
  const menuData = useMenuData()
  const { animate, isNavOpen, toggleNav } = useMobileNav()
  const { ref } = useClickOutside(() => toggleNav(false))
  const [open, toggleOpen] = useState({
    first: false,
    second: false
  })

  const handleToggle = (key: OpenStateKeys.Product | OpenStateKeys.About) => {
    toggleOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <button onClick={() => toggleNav(true)} className={styles.nav_icon}>
        <Image src="/icons/hamburger.svg" priority alt="mobile nav" width={20} height={20} />
      </button>
      {isNavOpen && (
        <div className={styles.overlay}>
          <div ref={ref} className={classnames(styles.menu, { [styles.is_open]: animate })}>
            <div className={styles.close_wrapper}>
              <button onClick={() => toggleNav(false)} className={styles.close}>
                <Image src="/icons/close.svg" priority alt="mobile nav" width={24} height={24} />
              </button>
            </div>
            <ul className={styles.list}>
              {menuData.map(({ href, title, submenu, active }) => {
                if (href) {
                  return (
                    <li key={title} className={styles.item}>
                      <Link href={href}>
                        <a>{title}</a>
                      </Link>
                      {active && <div className={styles.item_marker}></div>}
                    </li>
                  )
                }
                const openStateKey = OpenStateKeys[title as keyof typeof OpenStateKeys]

                return (
                  <React.Fragment key={title}>
                    <li className={styles.item}>
                      <button onClick={() => handleToggle(openStateKey)}>
                        {title}
                        <div className={styles.icon_wrapper}>
                          <Image src="/icons/chevron.svg" priority alt="chevron" width={24} height={24} />
                        </div>
                      </button>
                      {active && <div className={styles.item_marker}></div>}
                    </li>
                    <li>
                      <ul className={classnames(styles.sublist, { [styles.open]: open[openStateKey] })}>
                        {submenu?.map(({ href, title, active }) => {
                          return (
                            <li key={title} className={styles.item}>
                              <Link href={href}>
                                <a>{title}</a>
                              </Link>
                              {active && <div className={styles.item_marker}></div>}
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  </React.Fragment>
                )
              })}
            </ul>
            <div className={styles.button_link_wrapper}>
              <ButtonLink href="/subscribe" modifiers={['small', 'filled']}>
                Buy Now
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNav

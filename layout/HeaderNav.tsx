import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'
import styles from 'styles/layout/HeaderNav.module.scss'
import { useMenuData } from 'hooks/useMenuData'
import { useTranslation } from 'next-i18next'

const HeaderNav = () => {
  const { t } = useTranslation('common')
  const menuData = useMenuData(t)

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {menuData.map(({ href, title, submenu, active }) => {
          if (href) {
            return (
              <li key={title} className={classnames(styles.nav_item, { [styles.active]: active })}>
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </li>
            )
          }

          return (
            <li key={title} className={classnames(styles.nav_item, { [styles.active]: active })}>
              {title}
              <div tabIndex={0} className={styles.icon_wrapper}>
                <Image src="/icons/chevron.svg" priority alt={t('header.chevron_alt')} width={16} height={16} />
              </div>
              <ul className={styles.subnav_list}>
                {submenu?.map(({ href, title, active }) => {
                  return (
                    <li key={title} className={styles.subnav_item}>
                      <Link href={href}>
                        <a>{title}</a>
                      </Link>
                      {active && <div className={styles.item_marker}></div>}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderNav

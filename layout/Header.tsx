import { FC } from 'react'
import HeaderNav from 'layout/HeaderNav'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from 'layout/MobileNav'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/layout/Header.module.scss'
import stylesShared from 'styles/Shared.module.scss'
import { useTranslation } from 'next-i18next'

interface IProps {
  scroll: boolean
}

const Header: FC<IProps> = ({ scroll }) => {
  const { t } = useTranslation('common')
  return (
    <header className={classnames(styles.header, stylesShared.container, { [styles.scrolled]: scroll })}>
      <Link href={ROUTES.home}>
        <a>
          <div className={styles.logo_container}>
            <Image src="/images/logo.jpg" alt={t('header.logo_alt')} priority layout="fill" objectFit="contain" />
          </div>
        </a>
      </Link>

      <HeaderNav />
      <MobileNav />
    </header>
  )
}

export default Header

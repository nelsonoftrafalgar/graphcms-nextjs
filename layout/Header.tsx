import HeaderNav from 'layout/HeaderNav'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from 'layout/MobileNav'
import classnames from 'classnames'
import styles from 'styles/layout/Header.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Header = () => {
  return (
    <header className={classnames(styles.header, stylesShared.container)}>
      <Link href="/">
        <a>
          <div className={styles.logo_container}>
            <Image src="/images/logo.webp" alt="logo" priority layout="fill" objectFit="contain" />
          </div>
        </a>
      </Link>
      <HeaderNav />
      <MobileNav />
    </header>
  )
}

export default Header

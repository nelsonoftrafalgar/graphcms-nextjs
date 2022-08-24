import HeaderNav from 'layout/HeaderNav'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from 'layout/MobileNav'
import styles from 'styles/layout/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
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

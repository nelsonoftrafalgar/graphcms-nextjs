import Image from 'next/image'
import Link from 'next/link'
import { footerMenuData } from 'utils/footerMenuData'
import styles from 'styles/layout/Footer.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Footer = () => {
  return (
    <footer className={stylesShared.container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.item}>
          <Link href="/">
            <a>
              <div className={styles.logo_container}>
                <Image src="/images/logo.webp" alt="logo" priority layout="fill" objectFit="contain" />
              </div>
            </a>
          </Link>
          <div className={styles.social_logo_container}>
            <div className={styles.social_logo}>
              <Image src="/icons/twitter.svg" alt="twitter" width={20} height={20} />
            </div>
            <div className={styles.social_logo}>
              <Image src="/icons/linkedin.svg" alt="linkedin" width={20} height={20} />
            </div>
          </div>
        </div>
        {footerMenuData.map(({ title, links }) => (
          <div key={title} className={styles.item}>
            <ul>
              <li className={styles.links_title}>{title}</li>
              {links.map(({ title, href }) => (
                <li key={title} className={styles.link}>
                  <Link href={href}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.subfooter}>
        <div className={styles.subfooter_item}>
          <p>Copyright © 2022 DataLexing, Inc.</p>
        </div>
        <div className={styles.subfooter_item}>
          <Link href="/terms_conditions">
            <a>Terms & Conditions</a>
          </Link>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from 'utils/routes'
import { getFooterMenuData } from 'utils/getFooterMenuData'
import styles from 'styles/layout/Footer.module.scss'
import stylesShared from 'styles/Shared.module.scss'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className={stylesShared.container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.item}>
          <Link href={ROUTES.home}>
            <a>
              <div className={styles.logo_container}>
                <Image src="/images/logo.webp" alt={t('footer.logo_alt')} priority layout="fill" objectFit="contain" />
              </div>
            </a>
          </Link>
          <div className={styles.social_logo_container}>
            <div className={styles.social_logo}>
              <Image priority src="/icons/twitter.svg" alt={t('footer.twitter')} width={20} height={20} />
            </div>
            <div className={styles.social_logo}>
              <Image priority src="/icons/linkedin.svg" alt={t('footer.linkedin')} width={20} height={20} />
            </div>
          </div>
        </div>
        {getFooterMenuData(t).map(({ title, links }) => (
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
          <p>{t('footer.copyright')}</p>
        </div>
        <div className={styles.subfooter_item}>
          <Link href={ROUTES.home}>
            <a>{t('footer.terms_and_conditions')}</a>
          </Link>
          <Link href={ROUTES.home}>
            <a>{t('footer.privacy')}</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import ButtonLink from 'components/ButtonLink'
import styles from 'styles/sections/Demo.module.scss'
import { useTranslation } from 'next-i18next'

const Demo = () => {
  const { t } = useTranslation('common')
  return (
    <section className={styles.demo}>
      <h2 className={styles.title}>{t('demo.title')}</h2>
      <ButtonLink href="/subscribe" modifiers={['large', 'transparent']}>
        {t('demo.button')}
      </ButtonLink>
    </section>
  )
}

export default Demo

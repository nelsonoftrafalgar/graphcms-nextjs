import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from 'styles/Error.module.scss'
import stylesShared from 'styles/Shared.module.scss'
import { useTranslation } from 'next-i18next'

const Custom404 = () => {
  const { t } = useTranslation('error')
  return (
    <section className={stylesShared.container}>
      <div className={styles.error_wrapper}>
        <h1>{t('404')}</h1>
      </div>
    </section>
  )
}

export default Custom404

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'error']))
    }
  }
}

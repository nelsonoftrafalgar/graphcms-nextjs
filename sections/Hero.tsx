import ButtonLink from 'components/ButtonLink'
import { FC } from 'react'
import { IHeading } from 'models/common'
import Image from 'next/image'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/sections/Hero.module.scss'
import stylesShared from 'styles/Shared.module.scss'
import { useTranslation } from 'next-i18next'

interface IProps {
  heading?: IHeading
}

const Hero: FC<IProps> = ({ heading }) => {
  const { t } = useTranslation('home')
  return (
    <section className={stylesShared.container}>
      <div className={classnames(styles.container, stylesShared.section_spacing)}>
        <div>
          <h1 className={styles.title}>{heading?.title}</h1>
          <p className={styles.content}>{heading?.content}</p>
          <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'filled']}>
            {t('hero.button')}
          </ButtonLink>
        </div>
        <div>
          <div className={styles.image}>
            <Image src="/images/hero_image.png" alt={t('hero.image_alt')} layout="fill" priority objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import ButtonLink from 'components/ButtonLink'
import { FC } from 'react'
import { IHero } from 'models/home'
import Image from 'next/image'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/sections/Hero.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Hero: FC<IHero> = ({ title, content, buttonText, imageAlt, image }) => {
  return (
    <section className={stylesShared.container}>
      <div className={classnames(styles.container, stylesShared.section_spacing)}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.content}>{content}</p>
          <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'filled']}>
            {buttonText}
          </ButtonLink>
        </div>
        <div>
          <div className={styles.image}>
            <Image src={image.url} alt={imageAlt} layout="fill" priority objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

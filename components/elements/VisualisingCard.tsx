import ButtonLink from 'components/ButtonLink'
import { FC } from 'react'
import { IVisualisingCard } from 'models/features'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/sections/Visualising.module.scss'
import stylesShared from 'styles/Shared.module.scss'

type TProps = IVisualisingCard

const CardImage: FC<Pick<IVisualisingCard, 'image' | 'imageAlt'>> = ({ image, imageAlt }) => (
  <div className={styles.image_wrapper}>
    <Link href={ROUTES.subscribe}>
      <a>
        <div className={styles.image}>
          <Image src={image.url} alt={imageAlt} layout="fill" objectFit="contain" />
        </div>
      </a>
    </Link>
  </div>
)

const CardContent: FC<Pick<IVisualisingCard, 'buttonText' | 'content' | 'title'> & { withLightFont?: boolean }> = ({
  title,
  content,
  buttonText,
  withLightFont
}) => (
  <div className={styles.content_wrapper}>
    <h3 className={classnames(styles.title, { [styles.light]: withLightFont })}>{title}</h3>
    <p className={classnames(styles.content, { [styles.light]: withLightFont })}>{content}</p>
    <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'transparent_color']}>
      {buttonText}
    </ButtonLink>
  </div>
)

const VisualisingCard: FC<TProps> = ({ theme, title, content, buttonText, imageAlt, image }) => {
  if (theme === 'light') {
    return (
      <div className={classnames(styles.background, styles.light)}>
        <div className={classnames(stylesShared.container, styles.wrapper, styles.rtl)}>
          <CardContent title={title} content={content} buttonText={buttonText} />
          <CardImage image={image} imageAlt={imageAlt} />
        </div>
      </div>
    )
  }

  return (
    <div className={classnames(styles.background, styles.dark)}>
      <div className={classnames(stylesShared.container, styles.wrapper)}>
        <CardImage image={image} imageAlt={imageAlt} />
        <CardContent title={title} content={content} buttonText={buttonText} withLightFont />
      </div>
    </div>
  )
}

export default VisualisingCard

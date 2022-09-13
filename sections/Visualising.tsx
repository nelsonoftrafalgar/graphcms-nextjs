import ButtonLink from 'components/ButtonLink'
import { FC } from 'react'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import { IVisualisingCard } from 'models/features'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/sections/Visualising.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  visualisingCards: IVisualisingCard[]
}

const Visualising: FC<IProps> = ({ heading, visualisingCards }) => {
  return (
    <section className={stylesShared.section_spacing}>
      <div className={styles.spacing}>
        <Heading justify="center" h1={heading?.title} />
      </div>

      {visualisingCards.map(({ id, title, content, buttonText, iamgeAlt, image }, i) => {
        if (i % 2 !== 0) {
          return (
            <div key={id} className={classnames(styles.background, styles.light)}>
              <div className={classnames(stylesShared.container, styles.wrapper, styles.rtl)}>
                <div className={styles.content_wrapper}>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.content}>{content}</p>
                  <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'transparent_color']}>
                    {buttonText}
                  </ButtonLink>
                </div>
                <div className={styles.image_wrapper}>
                  <Link href={ROUTES.subscribe}>
                    <a>
                      <div className={styles.image}>
                        <Image src={image.url} alt={iamgeAlt} layout="fill" objectFit="contain" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )
        }

        return (
          <div key={id} className={classnames(styles.background, styles.dark)}>
            <div className={classnames(stylesShared.container, styles.wrapper)}>
              <div className={styles.image_wrapper}>
                <Link href={ROUTES.subscribe}>
                  <a>
                    <div className={styles.image}>
                      <Image src={image.url} alt={iamgeAlt} layout="fill" objectFit="contain" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className={styles.content_wrapper}>
                <h3 className={classnames(styles.title, styles.light)}>{title}</h3>
                <p className={classnames(styles.content, styles.light)}>{content}</p>
                <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'transparent_color']}>
                  {buttonText}
                </ButtonLink>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Visualising

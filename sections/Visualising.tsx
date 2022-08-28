import ButtonLink from 'components/ButtonLink'
import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'
import styles from 'styles/sections/Visualising.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Visualising = () => {
  return (
    <section>
      <h1 className={styles.heading}>
        With Lexer, you need zero technical skills to start visualizing all of your data in real-time.
      </h1>
      <div className={classnames(styles.background, styles.dark)}>
        <div className={classnames(stylesShared.container, styles.wrapper)}>
          <div className={styles.image_wrapper}>
            <Link href="/subscribe">
              <a>
                <div className={styles.image}>
                  <Image src="/images/labeling.png" alt="labeling" layout="fill" objectFit="contain" />
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.content_wrapper}>
            <h3 className={classnames(styles.title, styles.light)}>White Labeling</h3>
            <p className={classnames(styles.content, styles.light)}>
              You can personalize your experience with Lexer by customizing your own brand identity, starting with a
              custom domain, custom login screen, and more. All found Lexer under your brand through our
              (White-Labeling) Service.
            </p>
            <ButtonLink href="/subscribe" modifiers={['large', 'transparent_color']}>
              Start Free Trial
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className={classnames(styles.background, styles.light)}>
        <div className={classnames(stylesShared.container, styles.wrapper, styles.rtl)}>
          <div className={styles.content_wrapper}>
            <h3 className={styles.title}>Data Sources</h3>
            <p className={styles.content}>
              Lexer can integrate with 60+ data sources such as Excel, Oracle, Google Analytics, MySQL, etc.
            </p>
            <ButtonLink href="/subscribe" modifiers={['large', 'transparent_color']}>
              Start Free Trial
            </ButtonLink>
          </div>
          <div className={styles.image_wrapper}>
            <Link href="/subscribe">
              <a>
                <div className={styles.image}>
                  <Image src="/images/sources_big.png" alt="sources" layout="fill" objectFit="contain" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={classnames(styles.background, styles.dark)}>
        <div className={classnames(stylesShared.container, styles.wrapper)}>
          <div className={styles.image_wrapper}>
            <Link href="/subscribe">
              <a>
                <div className={styles.image}>
                  <Image src="/images/service.webp" alt="service" layout="fill" objectFit="contain" />
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.content_wrapper}>
            <h3 className={classnames(styles.title, styles.light)}>Self Service</h3>
            <p className={classnames(styles.content, styles.light)}>
              Forget about coding and long cycle of waiting. With Lexer any user can generate reports within minutes
              from any data source.
            </p>
            <ButtonLink href="/subscribe" modifiers={['large', 'transparent_color']}>
              Start Free Trial
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className={classnames(styles.background, styles.light)}>
        <div className={classnames(stylesShared.container, styles.wrapper, styles.rtl)}>
          <div className={styles.content_wrapper}>
            <h3 className={styles.title}>Seamless Embedding</h3>
            <p className={styles.content}>
              Lexer helps you to embed your dashboards or charts to any website, app, or portal of your choice. You will
              be able to present and filter data directly and at the same time from embedded dashboards/charts.
            </p>
            <ButtonLink href="/subscribe" modifiers={['large', 'transparent_color']}>
              Start Free Trial
            </ButtonLink>
          </div>
          <div className={styles.image_wrapper}>
            <Link href="/subscribe">
              <a>
                <div className={styles.image}>
                  <Image src="/images/embedding.png" alt="embedding" layout="fill" objectFit="contain" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={classnames(styles.background, styles.dark)}>
        <div className={classnames(stylesShared.container, styles.wrapper)}>
          <div className={styles.image_wrapper}>
            <Link href="/subscribe">
              <a>
                <div className={styles.image}>
                  <Image src="/images/customisation.webp" alt="customisation" layout="fill" objectFit="contain" />
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.content_wrapper}>
            <h3 className={classnames(styles.title, styles.light)}>​Unlimited Customization</h3>
            <p className={classnames(styles.content, styles.light)}>
              With Lexer, you will be able to customize margins, paddings, width, height, colors, fonts, and much more.
              Pick from up to 40+ charts chosen to suit all your needs.
            </p>
            <ButtonLink href="/subscribe" modifiers={['large', 'transparent_color']}>
              Start Free Trial
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visualising

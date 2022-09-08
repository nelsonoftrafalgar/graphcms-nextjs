import ButtonLink from 'components/ButtonLink'
import Heading from 'components/Heading'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Picker.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Picker = () => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="center" p="DataLexing Services" h1="Helping you make data-driven decisions, together." />
      <div className={styles.container}>
        <div className={styles.view}>
          <div className={styles.picker}>
            <h2 className={styles.title}>Data Science</h2>
            <p className={styles.content}>
              The data science service will provide you with data models that solve for a specific need in your
              organization helping you make a breakthrough in your business excellence.
            </p>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <div className={styles.icon_wrapper}>
                  <Image src="/icons/predict.svg" alt="predict" width={16.4} height={16.4} />
                </div>
                <span>Predict</span>
              </div>
              <div className={styles.icon}>
                <div className={styles.icon_wrapper}>
                  <Image src="/icons/correlate.svg" alt="correlate" width={16.4} height={16.4} />
                </div>
                <span>Correlate</span>
              </div>
              <div className={styles.icon}>
                <div className={styles.icon_wrapper}>
                  <Image src="/icons/optimize.svg" alt="optimize" width={16.4} height={16.4} />
                </div>
                <span>Optimize</span>
              </div>
            </div>
            <ButtonLink href="/subscribe" modifiers={['large', 'filled']}>
              Get Started
            </ButtonLink>
            <div className={styles.navigation}>
              <div className={styles.dots}>
                <button className={classnames(styles.dot, styles.active)} />
                <button className={styles.dot} />
                <button className={styles.dot} />
                <button className={styles.dot} />
                <button className={styles.dot} />
                <button className={styles.dot} />
                <button className={styles.dot} />
              </div>
              <div className={styles.arrows}>
                <button>
                  <Image className={styles.arrow} src="/icons/arrow_left.svg" alt="arrow_left" width={15} height={14} />
                </button>
                <div className={styles.point} />
                <button>
                  <Image
                    className={styles.arrow}
                    src="/icons/arrow_right.svg"
                    alt="arrow_right"
                    width={15}
                    height={14}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <ul>
            <li className={styles.list_item}>
              <button>Data Science</button>
            </li>
            <li className={styles.list_item}>
              <button>Data Strategy</button>
            </li>
            <li className={styles.list_item}>
              <button>Data Engineering</button>
            </li>
            <li className={styles.list_item}>
              <button>Business Intelligence</button>
            </li>
            <li className={styles.list_item}>
              <button>Data Governance</button>
            </li>
            <li className={styles.list_item}>
              <button>Migration</button>
            </li>
            <li className={styles.list_item}>
              <button>Onboarding</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Picker

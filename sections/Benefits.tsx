import Heading from 'components/Heading'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Benefits.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Benefits = () => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="left" h2="Lexer Benefits" />
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <Image src="/images/difficulties.png" alt="difficulties" width={33} height={33} />
          <h3 className={styles.name}>Eliminate Technical Difficulties</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/navigation.png" alt="navigation" width={33} height={33} />
          <h3 className={styles.name}>Easy Navigation & UI</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/seamless.png" alt="seamless" width={33} height={33} />
          <h3 className={styles.name}>Seamless Set-up & On-boarding</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/analysis.png" alt="analysis" width={33} height={33} />
          <h3 className={styles.name}>Real-time Data Analysis</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/options.png" alt="options" width={33} height={33} />
          <h3 className={styles.name}>White-labeling Options</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/chart.png" alt="chart" width={33} height={33} />
          <h3 className={styles.name}>Variety of Dashboard & Chart</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/sources.png" alt="sources" width={33} height={33} />
          <h3 className={styles.name}>Connecting to All Essential Data Sources</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/support.png" alt="support" width={33} height={33} />
          <h3 className={styles.name}>A-Class Customer Support</h3>
        </div>
        <div className={styles.benefit}>
          <Image src="/images/points.png" alt="points" width={33} height={33} />
          <h3 className={styles.name}>Low Price Points</h3>
        </div>
      </div>
    </section>
  )
}

export default Benefits

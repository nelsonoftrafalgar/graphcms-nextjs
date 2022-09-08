import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Features.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Features = () => {
  return (
    <section className={classnames(styles.grid, stylesShared.container, stylesShared.section_spacing)}>
      <div className={styles.feature}>
        <div className={styles.icon}>
          <Image src="/icons/cloud.svg" alt="cloud" width={32} height={22} />
        </div>
        <div>
          <h3 className={styles.title}>Reliable Support</h3>
          <p className={styles.content}>
            Every Client is important and met with a dedicated Customer Experience Manager to ensure their journey with
            Lexer is seamlessly delightful from A to Z.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}>
          <Image src="/icons/mobile.svg" alt="mobile" width={20} height={32} />
        </div>
        <div>
          <h3 className={styles.title}>Any Device Any Time</h3>
          <p className={styles.content}>
            Log in from your favourite web browser from your favourite device without the hassle to install any
            software.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}>
          <Image src="/icons/security.svg" alt="security" width={32} height={32} />
        </div>
        <div>
          <h3 className={styles.title}>Data Security</h3>
          <p className={styles.content}>
            Enterprise-level governance and security controls with a flexible and extensible security model and provide
            a fine grain access control to features and datasets.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}>
          <Image src="/icons/chat.svg" alt="chat" width={32} height={32} />
        </div>
        <div>
          <h3 className={styles.title}>Arabic Support</h3>
          <p className={styles.content}>
            Fully support the Arabic Language with full RTL interface, giving you the ability to create dashboards and
            charts using Arabic Alphabet and Numerals.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}>
          <Image src="/icons/brush.svg" alt="brush" width={32} height={32} />
        </div>
        <div>
          <h3 className={styles.title}>Brand Identity</h3>
          <p className={styles.content}>
            You can personalize your experience with Lexer by customizing your own brand identity with full
            white-labeling.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}>
          <Image src="/icons/bell.svg" alt="bell" width={28} height={32} />
        </div>
        <div>
          <h3 className={styles.title}>Automated Alerts</h3>
          <p className={styles.content}>
            Define your KPIs and set up alerts based on desired conditions then Lexer will notify you via Email or Slack
            immediately when the rules and conditions are met. making sure you are always in control.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features

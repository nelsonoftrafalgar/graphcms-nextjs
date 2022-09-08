import ButtonLink from 'components/ButtonLink'
import Heading from 'components/Heading'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Decisions.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Decisions = () => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="center" p="Why DataLexing?" h2="Make the right decision at the right time" />
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Image src="/icons/telescope.svg" alt="telescope" width={32} height={22} />
          </div>
          <h3 className={styles.title}>You know your Data Explore it yourself</h3>
          <p className={styles.content}>
            Lexer will help you in the easiest and most significant way to analyze your data without any need from data
            experts.
          </p>
        </div>
        <div className={classnames(styles.card, styles.dark)}>
          <div className={classnames(styles.icon, styles.dark)}>
            <Image src="/icons/server.svg" alt="server" width={28} height={22} />
          </div>
          <h3 className={styles.title}>Get Closer to your Data</h3>
          <p className={styles.content}>
            Lexer can connect to many popular datasource starting from excel files and going all the way to the most
            popular databases such as Microsoft, Oracle, Google Analytics, MySQL plus popular BigData technologies.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Image src="/icons/eye.svg" alt="eye" width={32} height={22} />
          </div>
          <h3 className={styles.title}>Single Source of Truth</h3>
          <p className={styles.content}>
            Lexer helps your business increase its impact by combining all of your data in one place
          </p>
        </div>
      </div>
      <div className={styles.bottom_wrapper}>
        <h2 className={styles.title_bottom}>Start making Data-Driven Decisions with Lexer!</h2>
        <ButtonLink href="/subscribe" modifiers={['large', 'filled']}>
          Get Started for Free
        </ButtonLink>
      </div>
    </section>
  )
}

export default Decisions

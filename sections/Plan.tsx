import ButtonLink from 'components/ButtonLink'
import Image from 'next/image'
import styles from 'styles/sections/Plan.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Plan = () => {
  return (
    <section className={stylesShared.container}>
      <p className={styles.heading_small}>Pricing</p>
      <h1 className={styles.heading}>Start making Data-Driven Decisions with the right plan!</h1>
      <div className={styles.wrapper}>
        <div className={styles.plan}>
          <p className={styles.type}>Starter</p>
          <p className={styles.price}>
            <span>USD 99</span>/Month*
          </p>
          <p className={styles.includes}>Starter Includes:</p>
          <ul className={styles.list}>
            <li className={styles.item}>Unlimited Datasources</li>
            <li className={styles.item}>Unlimited Dashboards</li>
            <li className={styles.item}>Scheduled Alerts</li>
            <li className={styles.item}>Proactive Reporting</li>
            <li className={styles.item}>Lexer Support Included</li>
          </ul>
          <ButtonLink href="/subscribe" modifiers={['large', 'filled']}>
            Get Started
          </ButtonLink>
        </div>
        <div className={styles.plan}>
          <p className={styles.type}>Enterprise</p>
          <p className={styles.price}>
            <span>USD 149</span>/Month*
          </p>
          <p className={styles.includes}>Everything in the Starter, Plus:</p>
          <ul className={styles.list}>
            <li className={styles.item}>Single Sign-On</li>
            <li className={styles.item}>Ongoing Success Program</li>
            <li className={styles.item}>Dedicated Success Manager</li>
            <li className={styles.item}>Advanced Permissions Configuration</li>
            <li className={styles.item}>Row-Level Security</li>
            <li className={styles.item}>Advanced Actions Log</li>
          </ul>
          <ButtonLink href="/subscribe" modifiers={['large', 'filled']}>
            Get Started
          </ButtonLink>
        </div>
        <div className={styles.plan}>
          <p className={styles.type}>On-Premise</p>
          <p className={styles.price}>
            <span>Contact Us</span>
          </p>
          <p className={styles.includes}>Everything in the Enterprise, Plus:</p>
          <ul className={styles.list}>
            <li className={styles.item}>On-Premise Deployment</li>
            <li className={styles.item}>Lexer Training</li>
            <li className={styles.item}>Deployment</li>
            <li className={styles.item}>Premium Support</li>
          </ul>
          <ButtonLink href="/subscribe" modifiers={['large', 'transparent']}>
            Get Started
          </ButtonLink>
        </div>
      </div>
      <h3 className={styles.sub_heading}>All plans include:</h3>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image src="/icons/setup.svg" alt="setup" width={32.7} height={32.7} />
          <span>Lexer Setup</span>
        </div>
        <div className={styles.icon}>
          <Image src="/icons/training.svg" alt="training" width={32.7} height={32.7} />
          <span>Lexer Training</span>
        </div>
        <div className={styles.icon}>
          <Image src="/icons/support.svg" alt="support" width={32.7} height={32.7} />
          <span>Premium Support</span>
        </div>
      </div>
    </section>
  )
}

export default Plan

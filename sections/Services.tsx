import Image from 'next/image'
import styles from 'styles/sections/Services.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Services = () => {
  return (
    <section className={stylesShared.container}>
      <h2 className={styles.heading}>Datalexing Services Empower You To:</h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <Image src="/images/software.svg" alt="software" width={127} height={127} />
          <p>Ramp up quickly with new software.</p>
        </div>
        <div className={styles.service}>
          <Image src="/images/team.png" alt="team" width={127} height={127} />
          <p>Get your entire team up to speed at once.</p>
        </div>
        <div className={styles.service}>
          <Image src="/images/tech.png" alt="tech" width={127} height={127} />
          <p>Integrate Lexer with your existing tech.</p>
        </div>
        <div className={styles.service}>
          <Image src="/images/business.png" alt="business" width={127} height={127} />
          <p>Meet business objectives with efficiency.</p>
        </div>
      </div>
    </section>
  )
}

export default Services

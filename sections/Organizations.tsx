import Image from 'next/image'
import styles from 'styles/sections/Organizations.module.scss'

const Organizations = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top_wrapper}>
        <p className={styles.heading_small}>DataLexing Services</p>
        <h1 className={styles.heading}>Helping you make data-driven decisions, together.</h1>
      </div>
      <div className={styles.bottom_wrapper}>
        <div className={styles.image_wrapper}>
          <div className={styles.image}>
            <Image src="/images/organizations.webp" alt="organizations" layout="fill" objectFit="contain" />
          </div>
        </div>
        <h2 className={styles.sub_heading}>Our Mission </h2>
        <p className={styles.sub_heading_small}>
          To provide the tools that simplify data and empower data-driven decisions
        </p>
      </div>
    </section>
  )
}

export default Organizations

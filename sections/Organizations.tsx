import Heading from 'components/Heading'
import Image from 'next/image'
import styles from 'styles/sections/Organizations.module.scss'

const Organizations = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top_wrapper}>
        <Heading
          light
          justify="center"
          p="DataLexing Services"
          h1="Helping you make data-driven decisions, together."
        />
      </div>
      <div className={styles.bottom_wrapper}>
        <div className={styles.image_wrapper}>
          <div className={styles.image}>
            <Image src="/images/organizations.webp" alt="organizations" layout="fill" objectFit="contain" />
          </div>
        </div>
        <Heading
          invert
          justify="center"
          h2="Our Mission"
          p="To provide the tools that simplify data and empower data-driven decisions"
        />
      </div>
    </section>
  )
}

export default Organizations

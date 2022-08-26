import ButtonLink from 'components/ButtonLink'
import Image from 'next/image'
import styles from 'styles/sections/Hero.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Hero = () => {
  return (
    <section className={stylesShared.container}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Turn Projects That Take Weeks, to Tasks That Takes Minutes!</h1>
          <p className={styles.content}>
            Finally, a tool that is powerful yet easy to use. Giving business users the ability to explore their own
            data without any technical skills.
          </p>
          <ButtonLink href="/subscribe" modifiers={['large', 'filled']}>
            Get a Free Demo
          </ButtonLink>
        </div>
        <div>
          <div className={styles.image}>
            <Image src="/images/hero_image.png" alt="hero image" layout="fill" priority objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

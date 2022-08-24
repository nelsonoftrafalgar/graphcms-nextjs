import ButtonLink from 'components/ButtonLink'
import styles from 'styles/sections/Demo.module.scss'

const Demo = () => {
  return (
    <section className={styles.demo}>
      <h2 className={styles.title}>Try Lexer Book Your Free Demo</h2>
      <ButtonLink href="/subscribe" modifiers={['large', 'transparent']}>
        Get Started
      </ButtonLink>
    </section>
  )
}

export default Demo

import AccordionElement from 'components/AccordionElement'
import { faqData } from 'utils/faqData'
import styles from 'styles/sections/FAQ.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const FAQ = () => {
  return (
    <section className={stylesShared.container}>
      <p className={styles.heading_small}>Frequently Asked Questions</p>
      <h2 className={styles.heading}>Find answers and general information quickly.</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {faqData.map((item) => (
            <AccordionElement key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ

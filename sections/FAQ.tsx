import AccordionElement from 'components/AccordionElement'
import Heading from 'components/Heading'
import classnames from 'classnames'
import { faqData } from 'utils/faqData'
import styles from 'styles/sections/FAQ.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const FAQ = () => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="center" p="Frequently Asked Questions" h2="Find answers and general information quickly." />
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

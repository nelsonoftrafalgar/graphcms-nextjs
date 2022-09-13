import { IFAQ, IHeading } from 'models/pricing'

import AccordionElement from 'components/AccordionElement'
import { FC } from 'react'
import Heading from 'components/Heading'
import classnames from 'classnames'
import styles from 'styles/sections/FAQ.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  faqs: IFAQ[]
}

const FAQ: FC<IProps> = ({ heading, faqs }) => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="center" p={heading?.content} h2={heading?.title} />
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {faqs.map((item) => (
            <AccordionElement key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ

import { FC, useState } from 'react'

import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/components/AccordionElement.module.scss'
import { useTranslation } from 'next-i18next'

interface IProps {
  question: string
  answer: string
}

const AccordionElement: FC<IProps> = ({ question, answer }) => {
  const { t } = useTranslation('common')
  const [open, toggleOpen] = useState(false)
  return (
    <li className={classnames(styles.item, { [styles.open]: open })}>
      <button tabIndex={0} onClick={() => toggleOpen(!open)} className={styles.button}>
        <span>{question}</span>
        <div className={classnames(styles.icon_wrapper, { [styles.open]: open })}>
          <Image src="/icons/chevron.svg" priority alt={t('accordion.chevron_alt')} width={20} height={20} />
        </div>
      </button>
      <p className={styles.content}>{answer}</p>
    </li>
  )
}

export default AccordionElement

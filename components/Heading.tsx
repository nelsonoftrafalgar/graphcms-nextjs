import { FC } from 'react'
import classnames from 'classnames'
import styles from 'styles/components/Heading.module.scss'

interface IProps {
  h1?: string
  h2?: string
  p?: string
  invert?: boolean
  justify: 'center' | 'left' | 'right'
  light?: boolean
}

const Heading: FC<IProps> = ({ invert, h1, h2, p, justify, light }) => {
  return (
    <>
      {invert ? (
        <div className={classnames(styles.wrapper, styles[justify], { [styles.light]: light })}>
          {h1 && <h1 className={classnames(styles.title, styles.first)}>{h1}</h1>}
          {h2 && <h2 className={classnames(styles.title, styles.second)}>{h2}</h2>}
          {p && <p className={classnames(styles.paragraph, styles[justify])}>{p}</p>}
        </div>
      ) : (
        <div className={classnames(styles.wrapper, styles[justify], { [styles.light]: light })}>
          {p && <p className={classnames(styles.paragraph, styles[justify])}>{p}</p>}
          {h1 && <h1 className={classnames(styles.title, styles.first)}>{h1}</h1>}
          {h2 && <h2 className={classnames(styles.title, styles.second)}>{h2}</h2>}
        </div>
      )}
    </>
  )
}

export default Heading

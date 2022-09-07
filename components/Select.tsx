import { FC, PropsWithChildren } from 'react'

import classnames from 'classnames'
import selectStyles from 'styles/components/Select.module.scss'
import styles from 'styles/components/Input.module.scss'

interface IProps {
  id: string
  label?: string
  error?: string
}

const Select: FC<PropsWithChildren<IProps>> = ({ id, label, error, children }) => {
  return (
    <label className={classnames(styles.label, { [styles.content]: label })} htmlFor={id}>
      {label}
      <select
        id={id}
        className={classnames(selectStyles.select, styles.input, { [styles.with_label]: label, [styles.error]: error })}
      >
        <option selected disabled value="">
          Please Select
        </option>
        {children}
      </select>
      {error && <p className={classnames(styles.error_message, { [styles.with_label]: label })}>{error}</p>}
    </label>
  )
}

export default Select

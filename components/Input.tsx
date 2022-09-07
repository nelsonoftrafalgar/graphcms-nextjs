import { FC } from 'react'
import classnames from 'classnames'
import styles from 'styles/components/Input.module.scss'

interface IProps {
  id: string
  type: 'text' | 'email'
  error?: string
  label?: string
  placeholder?: string
}

const Input: FC<IProps> = ({ id, error, label, placeholder, type }) => {
  return (
    <label className={classnames(styles.label, { [styles.content]: label })} htmlFor={id}>
      {label}
      <input
        placeholder={placeholder}
        className={classnames(styles.input, { [styles.with_label]: label, [styles.error]: error })}
        id={id}
        type={type}
      />
      {error && <p className={classnames(styles.error_message, { [styles.with_label]: label })}>{error}</p>}
    </label>
  )
}

export default Input

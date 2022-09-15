import { FC } from 'react'
import classnames from 'classnames'
import styles from 'styles/components/Input.module.scss'
import { useFormContext } from 'react-hook-form'

interface IProps {
  id: string
  type: 'text' | 'email'
  label?: string
  placeholder?: string
}

const Input: FC<IProps> = ({ id, label, placeholder, type }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const error = errors[id]
  return (
    <label className={classnames(styles.label, { [styles.content]: label })} htmlFor={id}>
      {label}
      <input
        {...register(id)}
        placeholder={placeholder}
        className={classnames(styles.input, { [styles.with_label]: label, [styles.error]: error })}
        id={id}
        type={type}
        aria-label={id}
      />
      {error && (
        <p data-testid={`${id}_error`} className={classnames(styles.error_message, { [styles.with_label]: label })}>
          {error?.message as string}
        </p>
      )}
    </label>
  )
}

export default Input

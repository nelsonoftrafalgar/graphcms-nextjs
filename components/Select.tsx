import { FC, PropsWithChildren } from 'react'

import classnames from 'classnames'
import selectStyles from 'styles/components/Select.module.scss'
import styles from 'styles/components/Input.module.scss'
import { useFormContext } from 'react-hook-form'

interface IProps {
  id: string
  label?: string
}

const Select: FC<PropsWithChildren<IProps>> = ({ id, label, children }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const error = errors[id]
  return (
    <label className={classnames(styles.label, { [styles.content]: label })} htmlFor={id}>
      {label}
      <select
        {...register(id)}
        id={id}
        className={classnames(selectStyles.select, styles.input, { [styles.with_label]: label, [styles.error]: error })}
        aria-label={id}
      >
        <option selected disabled value="">
          Please Select
        </option>
        {children}
      </select>
      {error && (
        <p data-testid={`${id}_error`} className={classnames(styles.error_message, { [styles.with_label]: label })}>
          {error?.message as string}
        </p>
      )}
    </label>
  )
}

export default Select

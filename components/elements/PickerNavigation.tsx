import { Dispatch, FC, SetStateAction } from 'react'

import { IPickerItem } from 'models/service'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/Picker.module.scss'
import { useTranslation } from 'next-i18next'

interface IProps {
  pickerIndex: number
  pickerItems: IPickerItem[]
  handleDecrementPickerIndex: () => void
  handleIncrementPickerIndex: () => void
  setPickerIndex: Dispatch<SetStateAction<number>>
}

const PickerNavigation: FC<IProps> = ({
  pickerIndex,
  pickerItems,
  handleDecrementPickerIndex,
  handleIncrementPickerIndex,
  setPickerIndex
}) => {
  const { t } = useTranslation('service')
  return (
    <div className={styles.navigation}>
      <div className={styles.dots}>
        {pickerItems.map(({ id }, idx) => (
          <button
            key={id}
            onClick={() => setPickerIndex(idx)}
            className={classnames(styles.dot, { [styles.active]: idx === pickerIndex })}
          />
        ))}
      </div>
      <div className={styles.arrows}>
        <button onClick={handleDecrementPickerIndex}>
          <Image
            priority
            className={classnames(styles.arrow, { [styles.active]: pickerIndex > 0 })}
            src="/icons/arrow_left.svg"
            alt={t('picker_navigation.arrow_left')}
            width={15}
            height={14}
          />
        </button>
        <div className={styles.point} />
        <button onClick={handleIncrementPickerIndex}>
          <Image
            priority
            className={classnames(styles.arrow, { [styles.active]: pickerIndex < pickerItems.length - 1 })}
            src="/icons/arrow_right.svg"
            alt={t('picker_navigation.arrow_right')}
            width={15}
            height={14}
          />
        </button>
      </div>
    </div>
  )
}

export default PickerNavigation

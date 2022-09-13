import { Dispatch, FC, SetStateAction } from 'react'

import { IPickerItem } from 'models/service'
import classnames from 'classnames'
import styles from 'styles/sections/Picker.module.scss'

interface IProps {
  pickerIndex: number
  pickerItems: IPickerItem[]
  setPickerIndex: Dispatch<SetStateAction<number>>
}

const PickerList: FC<IProps> = ({ pickerIndex, pickerItems, setPickerIndex }) => {
  return (
    <div className={styles.list}>
      <ul>
        {pickerItems.map(({ title, id }, idx) => (
          <li key={id} className={classnames(styles.list_item, { [styles.active]: idx === pickerIndex })}>
            <button onClick={() => setPickerIndex(idx)}>{title}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PickerList

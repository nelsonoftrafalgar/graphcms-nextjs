import { FC } from 'react'
import { IPickerItemIcon } from 'models/service'
import Image from 'next/image'
import styles from 'styles/sections/Picker.module.scss'

type TProps = IPickerItemIcon

const PIckerItemIcon: FC<TProps> = ({ name, icon, iconAlt, iconHeight, iconWidth }) => {
  return (
    <div className={styles.icon}>
      <div className={styles.icon_wrapper}>
        <Image priority src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
      </div>
      <span>{name}</span>
    </div>
  )
}

export default PIckerItemIcon

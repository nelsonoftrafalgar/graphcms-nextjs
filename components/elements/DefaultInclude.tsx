import React, { FC } from 'react'

import { IDefaultInclude } from 'models/pricing'
import Image from 'next/image'
import styles from 'styles/sections/Plan.module.scss'

type TProps = IDefaultInclude

const DefaultInclude: FC<TProps> = ({ content, icon, iconAlt, iconHeight, iconWidth }) => {
  return (
    <div className={styles.icon}>
      <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
      <span>{content}</span>
    </div>
  )
}

export default DefaultInclude

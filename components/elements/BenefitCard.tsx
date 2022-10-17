import { FC } from 'react'
import { IBenefitCard } from 'models/features'
import Image from 'next/image'
import styles from 'styles/sections/Benefits.module.scss'

type TProps = IBenefitCard

const BenefitCard: FC<TProps> = ({ title, image, imageAlt, imageHeight, imageWidth }) => {
  return (
    <div className={styles.benefit}>
      <Image priority src={image.url} alt={imageAlt} width={imageWidth} height={imageHeight} />
      <h3 className={styles.name}>{title}</h3>
    </div>
  )
}

export default BenefitCard

import { FC, useState } from 'react'

import ButtonLink from 'components/ButtonLink'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import { IPickerItem } from 'models/service'
import Image from 'next/image'
import { ROUTES } from 'utils/routes'
import classnames from 'classnames'
import styles from 'styles/sections/Picker.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  pickerItems: IPickerItem[]
}

const Picker: FC<IProps> = ({ heading, pickerItems }) => {
  const [pickerIndex, setPickerIndex] = useState(0)

  const handleIncrementPickerIndex = () => pickerIndex < pickerItems.length - 1 && setPickerIndex((idx) => idx + 1)
  const handleDecrementPickerIndex = () => pickerIndex > 0 && setPickerIndex((idx) => idx - 1)

  const selectedPickerItem = pickerItems[pickerIndex]

  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <Heading justify="center" p={heading?.content} h1={heading?.title} />
      <div className={styles.container}>
        <div className={styles.view}>
          <div className={styles.picker}>
            <h2 className={styles.title}>{selectedPickerItem?.title}</h2>
            <p className={styles.content}>{selectedPickerItem?.content}</p>
            <div className={styles.icons}>
              {selectedPickerItem?.pickerItemIcons.map(({ id, name, icon, iconAlt, iconHeight, iconWidth }) => (
                <div key={id} className={styles.icon}>
                  <div className={styles.icon_wrapper}>
                    <Image src={icon.url} alt={iconAlt} width={iconWidth} height={iconHeight} />
                  </div>
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'filled']}>
              {selectedPickerItem?.buttonText}
            </ButtonLink>
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
                    className={classnames(styles.arrow, { [styles.active]: pickerIndex > 0 })}
                    src="/icons/arrow_left.svg"
                    alt="arrow_left"
                    width={15}
                    height={14}
                  />
                </button>
                <div className={styles.point} />
                <button onClick={handleIncrementPickerIndex}>
                  <Image
                    className={classnames(styles.arrow, { [styles.active]: pickerIndex < pickerItems.length - 1 })}
                    src="/icons/arrow_right.svg"
                    alt="arrow_right"
                    width={15}
                    height={14}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <ul>
            {pickerItems.map(({ title, id }, idx) => (
              <li key={id} className={classnames(styles.list_item, { [styles.active]: idx === pickerIndex })}>
                <button onClick={() => setPickerIndex(idx)}>{title}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Picker

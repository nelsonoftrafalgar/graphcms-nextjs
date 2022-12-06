import { FC, useState } from 'react'

import ButtonLink from 'components/ButtonLink'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import { IPickerItem } from 'models/service'
import PickerItemIcon from 'components/elements/PickerItemIcon'
import PickerList from 'components/elements/PickerList'
import PickerNavigation from 'components/elements/PickerNavigation'
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
              {selectedPickerItem?.pickerItemIcons.map((pickerItemIcon) => (
                <PickerItemIcon key={pickerItemIcon.id} {...pickerItemIcon} />
              ))}
            </div>
            <ButtonLink href={ROUTES.subscribe} modifiers={['large', 'filled']}>
              {selectedPickerItem?.buttonText}
            </ButtonLink>
            <PickerNavigation
              pickerIndex={pickerIndex}
              pickerItems={pickerItems}
              handleDecrementPickerIndex={handleDecrementPickerIndex}
              handleIncrementPickerIndex={handleIncrementPickerIndex}
              setPickerIndex={setPickerIndex}
            />
          </div>
        </div>
        <PickerList pickerIndex={pickerIndex} pickerItems={pickerItems} setPickerIndex={setPickerIndex} />
      </div>
    </section>
  )
}

export default Picker

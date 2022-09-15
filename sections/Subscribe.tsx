import { FormProvider, useForm } from 'react-hook-form'

import Button from 'components/Button'
import { FC } from 'react'
import { ISelect } from 'models/common'
import Input from 'components/Input'
import Select from 'components/Select'
import classnames from 'classnames'
import styles from 'styles/sections/Subscribe.module.scss'
import stylesShared from 'styles/Shared.module.scss'
import { subscribeSchema } from 'validation/subscribe'
import { yupResolver } from '@hookform/resolvers/yup'

interface IProps {
  typeSelect: ISelect
  helpSelect: ISelect
  toolSelect: ISelect
}

const Subscribe: FC<IProps> = ({ typeSelect, helpSelect, toolSelect }) => {
  const methods = useForm({
    resolver: yupResolver(subscribeSchema)
  })

  const onSubmit = (data: Record<string, string>) => {
    console.log('submit data', data)
  }

  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          YOU KNOW YOUR <span>DATA</span>, EXPLORE IT <span>YOURSELF!</span>
        </p>
        <h1 className={styles.heading}>Start your subscription today!</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.grid}>
              <Input id="first_name" type="text" label="First Name*" />
              <Input id="last_name" type="text" label="Last Name*" />
              <Input id="mobile_phone_number" type="text" label="Mobile Phone Number*" />
              <Input id="email" type="email" label="Email*" />
              <Input id="company_name" type="text" label="Company Name*" />
              <Select label="Company type*" id="type">
                {typeSelect.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
              <Select label="How can we help you?*" id="help">
                {helpSelect.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
              <Select label="What is the tool used for reports?*" id="tool">
                {toolSelect.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </div>
            <Input id="challenges" type="text" label="How can we help overcome your reporting challenges?*" />
            <Button>Submit</Button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}

export default Subscribe

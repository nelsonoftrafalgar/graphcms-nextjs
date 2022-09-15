import { FormProvider, useForm } from 'react-hook-form'

import Button from 'components/Button'
import { FC } from 'react'
import { ISelect } from 'models/common'
import Input from 'components/Input'
import Select from 'components/Select'
import classnames from 'classnames'
import { contactSchema } from 'validation/contact'
import styles from 'styles/sections/Contact.module.scss'
import stylesShared from 'styles/Shared.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'

interface IProps {
  topicSelectOptions: ISelect
}

const Contact: FC<IProps> = ({ topicSelectOptions }) => {
  const methods = useForm({
    resolver: yupResolver(contactSchema)
  })

  const onSubmit = (data: Record<string, string>) => {
    console.log('submit data', data)
  }

  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h1 className={styles.intro}>Get in touch</h1>
          <p className={styles.content}>
            Please get in touch and our expert support team will answer all your questions
          </p>
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>Always happy to hear from you!</h2>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Input id="first_name" type="text" placeholder="First Name" />
              <Input id="last_name" type="text" placeholder="Last Name" />
              <Input id="email" type="email" placeholder="Email" />
              <Input id="phone_number" type="text" placeholder="Phone Number" />
              <Input id="company_name" type="text" placeholder="Company Name" />
              <Select id="topic">
                {topicSelectOptions.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
              <Button>Submit</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  )
}

export default Contact

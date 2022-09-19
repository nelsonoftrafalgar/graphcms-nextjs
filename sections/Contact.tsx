import { FormProvider, useForm } from 'react-hook-form'

import Button from 'components/Button'
import { FC } from 'react'
import { ISelect } from 'models/common'
import Input from 'components/Input'
import Select from 'components/Select'
import classnames from 'classnames'
import { getContactSchema } from 'validation/getContactSchema'
import styles from 'styles/sections/Contact.module.scss'
import stylesShared from 'styles/Shared.module.scss'
import { useTranslation } from 'next-i18next'
import { yupResolver } from '@hookform/resolvers/yup'

interface IProps {
  topicSelect: ISelect
}

const Contact: FC<IProps> = ({ topicSelect }) => {
  const { t } = useTranslation()
  const methods = useForm({
    resolver: yupResolver(getContactSchema(t))
  })

  const onSubmit = (data: Record<string, string>) => {
    console.log('submit data', data)
  }

  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h1 className={styles.intro}>{t('contact_us:intro')}</h1>
          <p className={styles.content}>{t('contact_us:content')}</p>
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>{t('contact_us:form_heading')}</h2>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Input id="first_name" type="text" placeholder={t('contact_us:placeholders.first_name')} />
              <Input id="last_name" type="text" placeholder={t('contact_us:placeholders.last_name')} />
              <Input id="email" type="email" placeholder={t('contact_us:placeholders.email')} />
              <Input id="phone_number" type="text" placeholder={t('contact_us:placeholders.phone_number')} />
              <Input id="company_name" type="text" placeholder={t('contact_us:placeholders.company_name')} />
              <Select id="topic">
                {topicSelect.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
              <Button>{t('contact_us:button')}</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  )
}

export default Contact

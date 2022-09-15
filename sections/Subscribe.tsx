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
import { useTranslation } from 'next-i18next'
import { yupResolver } from '@hookform/resolvers/yup'

interface IProps {
  typeSelect: ISelect
  helpSelect: ISelect
  toolSelect: ISelect
}

const Subscribe: FC<IProps> = ({ typeSelect, helpSelect, toolSelect }) => {
  const { t } = useTranslation('subscribe')
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
          {t('subscribe.title.1')} <span>{t('subscribe.title.2')}</span>, {t('subscribe.title.3')}{' '}
          <span>{t('subscribe.title.4')}</span>
        </p>
        <h1 className={styles.heading}>{t('subscribe.heading')}</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.grid}>
              <Input id="first_name" type="text" label={t('subscribe.labels.first_name')} />
              <Input id="last_name" type="text" label={t('subscribe.labels.last_name')} />
              <Input id="mobile_phone_number" type="text" label={t('subscribe.labels.mobile_phone_number')} />
              <Input id="email" type="email" label={t('subscribe.labels.email')} />
              <Input id="company_name" type="text" label={t('subscribe.labels.company_name')} />
              <Select id="type" label={t('subscribe.labels.type')}>
                {typeSelect.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
              <Select id="help" label={t('subscribe.labels.help')}>
                {helpSelect.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
              <Select id="tool" label={t('subscribe.labels.tool')}>
                {toolSelect.selectOptions.map(({ id, value }) => (
                  <option key={id} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </div>
            <Input label={t('subscribe.labels.challenges')} type="text" id="challenges" />
            <Button>{t('subscribe.button')}</Button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}

export default Subscribe

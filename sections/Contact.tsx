import Button from 'components/Button'
import { FC } from 'react'
import { ISelect } from 'models/common'
import Input from 'components/Input'
import Select from 'components/Select'
import classnames from 'classnames'
import styles from 'styles/sections/Contact.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  topicSelectOptions: ISelect
}

const Contact: FC<IProps> = ({ topicSelectOptions }) => {
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
          <form>
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
        </div>
      </div>
    </section>
  )
}

export default Contact

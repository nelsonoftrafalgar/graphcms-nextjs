import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import classnames from 'classnames'
import styles from 'styles/sections/Subscribe.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Subscribe = () => {
  return (
    <section className={classnames(stylesShared.container, stylesShared.section_spacing)}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          YOU KNOW YOUR <span>DATA</span>, EXPLORE IT <span>YOURSELF!</span>
        </p>
        <h1 className={styles.heading}>Start your subscription today!</h1>
        <form>
          <div className={styles.grid}>
            <Input id="first_name" type="text" label="First Name*" />
            <Input id="last_name" type="text" label="Last Name*" />
            <Input id="mobile_phone_number" type="text" label="Mobile Phone Number*" />
            <Input id="email" type="email" label="Email*" />
            <Input id="company_name" type="text" label="Company Name*" />
            <Select label="Company type*" id="type">
              <option value="Government">Government</option>
              <option value="Semi-Government">Semi-Government</option>
              <option value="Large Business">Large Business</option>
              <option value="Medium Business">Medium Business</option>
              <option value="Startup">Startup</option>
              <option value="Other">Other</option>
            </Select>
            <Select label="How can we help you?*" id="help">
              <option value="Free Demo">Free Demo</option>
              <option value="Free Trial">Free Trial</option>
              <option value="Features">Features</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Pricing">Pricing</option>
            </Select>
            <Select label="What is the tool used for reports?*" id="tool">
              <option value="BI Tools">BI Tools</option>
              <option value="Excel">Excel</option>
              <option value="Email">Email</option>
              <option value="Others">Others</option>
            </Select>
          </div>
          <Input id="challenges" type="text" label="How can we help overcome your reporting challenges?*" />
          <Button>Submit</Button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe

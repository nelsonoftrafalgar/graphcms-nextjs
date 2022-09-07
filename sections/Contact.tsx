import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import styles from 'styles/sections/Contact.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const Contact = () => {
  return (
    <section className={stylesShared.container}>
      <div className={styles.wrapper}>
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
              <option value="Buying Lexer License">Buying Lexer License</option>
              <option value="Lexer Demo/Free Trial">Lexer Demo/Free Trial</option>
              <option value="Profesional Services">Profesional Services</option>
              <option value="Lexer Onboarding">Lexer Onboarding</option>
              <option value="Data Analytics Training">Data Analytics Training</option>
              <option value="Join Our Tean">Join Our Tean</option>
              <option value="Other Inquires">Other Inquires</option>
            </Select>
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

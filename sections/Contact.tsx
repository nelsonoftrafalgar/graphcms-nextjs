import classnames from 'classnames'
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
            <label className={styles.label} htmlFor="first_name">
              <input
                placeholder="First Name"
                className={classnames(styles.input, styles.error)}
                id="first_name"
                type="text"
              />
              <p className={styles.error_message}>Error message</p>
            </label>
            <label className={styles.label} htmlFor="last_name">
              <input placeholder="Last Name" className={styles.input} id="last_name" type="text" />
              <p className={styles.error_message}>Error message</p>
            </label>
            <label className={styles.label} htmlFor="email">
              <input placeholder="Email" className={styles.input} id="email" type="email" />
              <p className={styles.error_message}>Error message</p>
            </label>
            <label className={styles.label} htmlFor="phone_number">
              <input placeholder="Phone Number" className={styles.input} id="phone_number" type="text" />
              <p className={styles.error_message}>Error message</p>
            </label>
            <label className={styles.label} htmlFor="company_name">
              <input placeholder="Company Name" className={styles.input} id="company_name" type="text" />
              <p className={styles.error_message}>Error message</p>
            </label>
            <label className={styles.label} htmlFor="type">
              <select id="type" className={classnames(styles.select, styles.input)}>
                <option selected disabled value="">
                  Please Select
                </option>
                <option value="Buying Lexer License">Buying Lexer License</option>
                <option value="Lexer Demo/Free Trial">Lexer Demo/Free Trial</option>
                <option value="Profesional Services">Profesional Services</option>
                <option value="Lexer Onboarding">Lexer Onboarding</option>
                <option value="Data Analytics Training">Data Analytics Training</option>
                <option value="Join Our Tean">Join Our Tean</option>
                <option value="Other Inquires">Other Inquires</option>
              </select>
              <p className={styles.error_message}>Error message</p>
            </label>
            <button className={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/TimeLine.module.scss'
import stylesShared from 'styles/Shared.module.scss'

const TimeLine = () => {
  return (
    <section className={styles.container}>
      <p className={styles.heading_small}>Timeline</p>
      <h1 className={styles.heading}>Learn how it all started and where we are today.</h1>
      <div className={classnames(stylesShared.container, styles.timeline)}>
        <div className={styles.line} />
        <div className={styles.stage}>
          <div className={classnames(styles.description, styles.left)}>
            <div className={classnames(styles.pointer, styles.right)} />
            <div className={styles.date}>
              <span>2018</span>
            </div>
            <div>
              <h3 className={styles.title}>We started our business to solve a real challenge</h3>
              <p>
                We have recognized the challenge that waste organizations time and money waiting for reports to be
                produced which.
              </p>
            </div>
            <div className={styles.image}>
              <Image src="/images/challenge.png" alt="challenge" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.outer} />
          </div>
          <div className={styles.year}>
            <span className={styles.year_left}>2018</span>
          </div>
        </div>
        <div className={styles.stage}>
          <div className={styles.year}>
            <span className={styles.year_right}>2019</span>
          </div>
          <div className={styles.point}>
            <div className={styles.outer} />
          </div>
          <div className={classnames(styles.description, styles.right)}>
            <div className={classnames(styles.pointer, styles.left)} />
            <div className={styles.date}>
              <span>2019</span>
            </div>
            <div className={styles.image}>
              <Image src="/images/product.png" alt="product" layout="fill" objectFit="contain" />
            </div>
            <div>
              <h3 className={styles.title}>We launched our first product, Lexer</h3>
              <p>
                Lexer is a Data Analytics tool that is enables the business user to analyze their data without relaying
                on data experts.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.stage}>
          <div className={classnames(styles.description, styles.left)}>
            <div className={classnames(styles.pointer, styles.right)} />
            <div className={styles.date}>
              <span>2020</span>
            </div>
            <div>
              <h3 className={styles.title}>We launched our first Lexer Extension, Lexer Chart Engine</h3>
              <p>
                Lexer Chart Engine would cut months of portal dashboard developments into hours without any code
                modifications which enables organizations release data products faster and fraction of the cost.
              </p>
            </div>
            <div className={styles.image}>
              <Image src="/images/extension.png" alt="extension" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.outer} />
          </div>
          <div className={styles.year}>
            <span className={styles.year_left}>2020</span>
          </div>
        </div>
        <div className={styles.stage}>
          <div className={styles.year}>
            <span className={styles.year_right}>2021</span>
          </div>
          <div className={styles.point}>
            <div className={styles.outer} />
          </div>
          <div className={classnames(styles.description, styles.right)}>
            <div className={classnames(styles.pointer, styles.left)} />
            <div className={styles.date}>
              <span>2021</span>
            </div>
            <div className={styles.image}>
              <Image src="/images/chart.png" alt="chart" layout="fill" objectFit="contain" />
            </div>
            <div>
              <h3 className={styles.title}>We launched our second Lexer Extension, Lexer Sheet</h3>
              <p>
                Lexer Sheets is an extension of Lexer where it eliminate the hustle of moving around excel files and has
                a centralized sheet wired to a live dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine

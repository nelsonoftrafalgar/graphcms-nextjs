import { FC } from 'react'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import { ITimelineItem } from 'models/aboutUs'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/TimeLine.module.scss'
import stylesShared from 'styles/Shared.module.scss'

interface IProps {
  heading?: IHeading
  timelineItems: ITimelineItem[]
}

const TimeLine: FC<IProps> = ({ heading, timelineItems }) => {
  return (
    <section className={styles.container}>
      <Heading justify="center" p={heading?.content} h2={heading?.title} />
      <div className={classnames(stylesShared.container, styles.timeline)}>
        <div className={styles.line} />
        {timelineItems.map(({ id, timelineLayout, year, title, content, image, imageAlt }) => {
          if (timelineLayout === 'right') {
            return (
              <div key={id} className={styles.stage}>
                <div className={styles.year}>
                  <span className={styles.year_right}>{year}</span>
                </div>
                <div className={styles.point}>
                  <div className={styles.outer} />
                </div>
                <div className={classnames(styles.description, styles.right)}>
                  <div className={classnames(styles.pointer, styles.left)} />
                  <div className={styles.date}>
                    <span>{year}</span>
                  </div>
                  <div className={styles.image}>
                    <Image src={image.url} alt={imageAlt} layout="fill" objectFit="contain" />
                  </div>
                  <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            )
          }

          return (
            <div key={id} className={styles.stage}>
              <div className={classnames(styles.description, styles.left)}>
                <div className={classnames(styles.pointer, styles.right)} />
                <div className={styles.date}>
                  <span>{year}</span>
                </div>
                <div>
                  <h3 className={styles.title}>{title}</h3>
                  <p>{content}</p>
                </div>
                <div className={styles.image}>
                  <Image src={image.url} alt={imageAlt} layout="fill" objectFit="contain" />
                </div>
              </div>
              <div className={styles.point}>
                <div className={styles.outer} />
              </div>
              <div className={styles.year}>
                <span className={styles.year_left}>{year}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TimeLine

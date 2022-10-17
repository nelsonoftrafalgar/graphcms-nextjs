import { FC } from 'react'
import { ITimelineItem } from 'models/aboutUs'
import Image from 'next/image'
import classnames from 'classnames'
import styles from 'styles/sections/TimeLine.module.scss'

type TProps = ITimelineItem

const Year: FC<Pick<ITimelineItem, 'year' | 'timelineLayout'>> = ({ year, timelineLayout }) => (
  <div className={styles.year}>
    <span className={classnames(timelineLayout === 'left' ? styles.year_left : styles.year_right)}>{year}</span>
  </div>
)

const Point = () => (
  <div className={styles.point}>
    <div className={styles.outer} />
  </div>
)

const TimelineImage: FC<Pick<ITimelineItem, 'image' | 'imageAlt'>> = ({ image, imageAlt }) => (
  <div className={styles.image}>
    <Image priority src={image.url} alt={imageAlt} layout="fill" objectFit="contain" />
  </div>
)

const Content: FC<Pick<ITimelineItem, 'title' | 'content'>> = ({ title, content }) => (
  <div>
    <h3 className={styles.title}>{title}</h3>
    <p>{content}</p>
  </div>
)

const Date: FC<Pick<ITimelineItem, 'year'>> = ({ year }) => (
  <div className={styles.date}>
    <span>{year}</span>
  </div>
)

const TimelineItem: FC<TProps> = ({ timelineLayout, year, title, content, image, imageAlt }) => {
  if (timelineLayout === 'right') {
    return (
      <div className={styles.stage}>
        <Year timelineLayout={timelineLayout} year={year} />
        <Point />
        <div className={classnames(styles.description, styles.right)}>
          <div className={classnames(styles.pointer, styles.left)} />
          <Date year={year} />
          <TimelineImage image={image} imageAlt={imageAlt} />
          <Content title={title} content={content} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.stage}>
      <div className={classnames(styles.description, styles.left)}>
        <div className={classnames(styles.pointer, styles.right)} />
        <Date year={year} />
        <Content title={title} content={content} />
        <TimelineImage image={image} imageAlt={imageAlt} />
      </div>
      <Point />
      <Year timelineLayout={timelineLayout} year={year} />
    </div>
  )
}

export default TimelineItem

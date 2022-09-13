import { FC } from 'react'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import { ITimelineItem } from 'models/aboutUs'
import TimelineItem from 'components/elements/TimelineItem'
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
        {timelineItems.map((timelineItem) => (
          <TimelineItem key={timelineItem.id} {...timelineItem} />
        ))}
      </div>
    </section>
  )
}

export default TimeLine

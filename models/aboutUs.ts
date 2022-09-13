export interface ITimelineItem {
  id: string
  timelineLayout: 'left' | 'right'
  year: string
  title: string
  content: string
  imageAlt: string
  image: {
    url: string
  }
}

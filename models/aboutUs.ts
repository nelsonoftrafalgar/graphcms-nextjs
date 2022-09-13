export interface ITimelineItem {
  id: string
  timelineLayout: 'left' | 'right'
  year: number
  title: string
  content: string
  imageAlt: string
  image: {
    url: string
  }
}

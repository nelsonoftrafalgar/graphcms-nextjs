export interface ICard {
  id: string
  content: string
  theme?: 'light' | 'dark'
  icon: { url: string }
  iconAlt: string
  iconHeight: number
  iconWidth: number
  title: string
}

export interface IHero {
  title: string
  content: string
  imageAlt: string
  buttonText: string
  image: {
    url: string
  }
}

export interface IDecisions {
  heading: string
  paragraph: string
  bottomTitle: string
  buttonText: string
  decisionCards: ICard[]
}

export interface ICard {
  id: string
  content: string
  icon: { url: string }
  iconAlt: string
  iconHeight: number
  iconWidth: number
  title: string
}

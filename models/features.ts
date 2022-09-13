export interface IVisualisingCard {
  id: string
  title: string
  content: string
  buttonText: string
  iamgeAlt: string
  image: { url: string }
}

export interface IBenefitCard {
  id: string
  title: string
  image: { url: string }
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

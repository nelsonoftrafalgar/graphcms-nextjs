export interface IHeading {
  title?: string
  content?: string
  section: string
}

interface IPlanInclude {
  include: string
  id: string
}
export interface IPlan {
  type: string
  span?: string
  price?: number
  id: string
  buttonText: string
  content: string
  planIncludes: IPlanInclude[]
}

export interface IDefaultInclude {
  id: string
  content: string
  iconWidth: string
  iconHeight: string
  icon: { url: string }
  iconAlt: string
}

export interface IFAQ {
  id: string
  question: string
  answer: string
}

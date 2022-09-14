import { Pages } from 'types/pages'
import { Sections } from 'types/sections'

export interface IHeading {
  title?: string
  content?: string
  section: Sections
  page: Pages
}

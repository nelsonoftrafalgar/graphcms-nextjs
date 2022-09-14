import { IHeading } from 'models/common'
import { Sections } from 'types/sections'

export const getHeadings =
  (headings: IHeading[]) =>
  (...args: Sections[]) =>
    args.map((arg) => {
      const results = headings.filter(({ section }) => section === arg)
      return results.length > 1 ? results : results[0]
    })

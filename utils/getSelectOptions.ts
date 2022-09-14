import { ISelect } from 'models/common'
import { Selects } from 'types/selects'

export const getSelectOptions =
  (selects: ISelect[]) =>
  (...args: Selects[]) =>
    args.map((arg) => {
      const results = selects.filter(({ name }) => name === arg)
      return results.length > 1 ? results : results[0]
    })

import { TFunction } from 'next-i18next'
import { activateMenuData } from 'utils/getMenuData'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

export const useMenuData = (t: TFunction) => {
  const { pathname } = useRouter()

  return useMemo(() => activateMenuData(t, pathname), [pathname, t])
}

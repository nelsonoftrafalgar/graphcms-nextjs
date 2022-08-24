import { activateMenuData, menuData } from 'utils/menuData'

import { useMemo } from 'react'
import { useRouter } from 'next/router'

export const useMenuData = () => {
  const { pathname } = useRouter()

  return useMemo(() => activateMenuData(menuData, pathname), [pathname])
}

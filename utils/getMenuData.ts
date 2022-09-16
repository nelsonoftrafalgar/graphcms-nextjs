import { ROUTES } from './routes'
import { TFunction } from 'next-i18next'

interface IMenuItem {
  href?: string
  title: string
  active: boolean
  submenu?: {
    href: string
    title: string
    active: boolean
  }[]
}

const getMenuData = (t: TFunction): IMenuItem[] => [
  {
    href: ROUTES.home,
    title: t('header.menu.home'),
    active: false
  },
  {
    title: t('header.menu.product'),
    active: false,
    submenu: [
      {
        href: ROUTES.features,
        title: t('header.menu.lexer'),
        active: false
      },
      {
        href: ROUTES.service,
        title: t('header.menu.service'),
        active: false
      }
    ]
  },
  {
    href: ROUTES.pricing,
    title: t('header.menu.pricing'),
    active: false
  },
  {
    title: t('header.menu.about'),
    active: false,
    submenu: [
      {
        href: ROUTES.about_us,
        title: t('header.menu.about_us'),
        active: false
      },
      {
        href: ROUTES.contact_us,
        title: t('header.menu.contact_us'),
        active: false
      }
    ]
  }
]

export const activateMenuData = (t: TFunction, currentHref: string) => {
  return getMenuData(t).map((menuItem) => {
    const { href, submenu } = menuItem
    if (href) {
      return {
        ...menuItem,
        active: href === currentHref
      }
    } else {
      return {
        ...menuItem,
        active: !!submenu?.find(({ href }) => href === currentHref),
        submenu: submenu?.map((submenuItem) => {
          return {
            ...submenuItem,
            active: submenuItem.href === currentHref
          }
        })
      }
    }
  })
}

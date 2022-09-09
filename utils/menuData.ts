import { ROUTES } from './routes'

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

export const menuData: IMenuItem[] = [
  {
    href: ROUTES.home,
    title: 'Home',
    active: false
  },
  {
    title: 'Product',
    active: false,
    submenu: [
      {
        href: ROUTES.features,
        title: 'Lexer',
        active: false
      },
      {
        href: ROUTES.service,
        title: 'Service',
        active: false
      }
    ]
  },
  {
    href: ROUTES.pricing,
    title: 'Pricing',
    active: false
  },
  {
    title: 'About',
    active: false,
    submenu: [
      {
        href: ROUTES.about_us,
        title: 'About Us',
        active: false
      },
      {
        href: ROUTES.contact_us,
        title: 'Contact Us',
        active: false
      }
    ]
  }
]

export const activateMenuData = (menuData: IMenuItem[], currentHref: string) => {
  return menuData.map((menuItem) => {
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

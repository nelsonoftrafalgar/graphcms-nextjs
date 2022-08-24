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
    href: '/',
    title: 'Home',
    active: false
  },
  {
    title: 'Product',
    active: false,
    submenu: [
      {
        href: '/features',
        title: 'Lexer',
        active: false
      },
      {
        href: '/services',
        title: 'Services',
        active: false
      }
    ]
  },
  {
    href: '/pricing',
    title: 'Pricing',
    active: false
  },
  {
    title: 'About',
    active: false,
    submenu: [
      {
        href: '/about-us',
        title: 'About Us',
        active: false
      },
      {
        href: '/contact-us',
        title: 'Contact Us',
        active: false
      },
      {
        href: '/career',
        title: 'Career',
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

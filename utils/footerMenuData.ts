import { ROUTES } from './routes'

export const footerMenuData = [
  {
    title: 'DataLexing',
    links: [
      { title: 'Home', href: ROUTES.home },
      { title: 'About Us', href: ROUTES.about_us }
    ]
  },
  {
    title: 'Product',
    links: [
      { title: 'Lexer', href: ROUTES.features },
      { title: 'Service', href: ROUTES.service },
      { title: 'Pricing', href: ROUTES.pricing }
    ]
  },
  {
    title: 'Support',
    links: [{ title: 'Contact us', href: ROUTES.contact_us }]
  }
]

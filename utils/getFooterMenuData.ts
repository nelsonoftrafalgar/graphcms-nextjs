import { ROUTES } from './routes'
import { TFunction } from 'next-i18next'
export const getFooterMenuData = (t: TFunction) => [
  {
    title: t('footer.menu.data_lexing'),
    links: [
      { title: t('footer.menu.home'), href: ROUTES.home },
      { title: t('footer.menu.about_us'), href: ROUTES.about_us }
    ]
  },
  {
    title: t('footer.menu.product'),
    links: [
      { title: t('footer.menu.lexer'), href: ROUTES.features },
      { title: t('footer.menu.service'), href: ROUTES.service },
      { title: t('footer.menu.pricing'), href: ROUTES.pricing }
    ]
  },
  {
    title: t('footer.menu.support'),
    links: [{ title: t('footer.menu.contact_us'), href: ROUTES.contact_us }]
  }
]

import { FC } from 'react'
import Heading from 'components/Heading'
import { IHeading } from 'models/common'
import Image from 'next/image'
import styles from 'styles/sections/Organizations.module.scss'

interface IProps {
  headings: IHeading[]
}

const Organizations: FC<IProps> = ({ headings }) => {
  const [top, bottom] = headings

  return (
    <section className={styles.container}>
      <div className={styles.top_wrapper}>
        <Heading light justify="center" p={top.content} h1={top.title} />
      </div>
      <div className={styles.bottom_wrapper}>
        <div className={styles.image_wrapper}>
          <div className={styles.image}>
            <Image src="/images/organizations.webp" alt="organizations" layout="fill" objectFit="contain" />
          </div>
        </div>
        <Heading invert justify="center" h2={bottom.title} p={bottom.content} />
      </div>
    </section>
  )
}

export default Organizations

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Template } from './_template'

export default function Home() {
  return <>
    <Head>
      <title>New-Dev0</title>
    </Head>
    <Template show_footer={false}>
      <div className={styles.card} style={{ marginTop: "4rem" }}>
        <Image className={styles.avatar} alt="Devesh Pal"  src="/avatar.png" width="250" height="250" />
        <hr />
        <p>Devesh Pal</p>
        <div className={styles.social}>
          <a href="https://karboncopy.t.me"><Image src="https://telegram.org/img/t_logo.png" alt="Telegram" width={40} height={40} /></a>
          <a href="https://github.com/New-dev0"><Image src="https://pngimg.com/uploads/github/github_PNG40.png" alt="New-dev0" width={40} height={40} /></a>
          <a href="https://twitter.com/NewDev0"><Image src="https://uploads-ssl.webflow.com/60bff85847fa8a72a29a81f2/60c68fd5582c35733bc2f596_Twitter_Bird.svg-p-800.png" alt="Newdev0" width={40} height={40} /></a>
        </div>
      </div>
    </Template>
  </>
}
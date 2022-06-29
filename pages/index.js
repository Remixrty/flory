import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../modules/components/Header'
import Pages from '../modules/components/Pages'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Floriarty</title>
        <meta name="description" content="Made by Remixrty" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.container}>
          <Pages />
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

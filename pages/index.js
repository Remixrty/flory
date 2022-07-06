import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Header from '../modules/components/Header'
import Pages from '../modules/components/Pages'
import { Provider } from 'react-redux'
import { store } from '../store'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Floriarty</title>
        <meta name="description" content="Made by Remixrty" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />

        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" */}
          {/* integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" /> */}

        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" /> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"/> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" */}
          {/* integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" */}
          {/* crossorigin="anonymous"/> */}

      </Head>

      <main className={styles.main}>
        <Provider store={store}>
          <Header />
          <div className={styles.container}>
            <Pages />
          </div>
        </Provider>
      </main>

      <footer className={styles.footer}>
        приветы из футера
      </footer>
    </div>
  )
}

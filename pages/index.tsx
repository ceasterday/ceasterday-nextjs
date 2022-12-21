import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ceasterday</title>
        <meta
          name="description"
          content="The internet's best place to get ceasterday'd"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          priority
          src="/ceasterdayd.png"
          alt="yuo just got ceaterday'd"
          width={755}
          height={521}
        />
      </main>
    </>
  );
}

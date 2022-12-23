import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import ceasterday from '../public/ceasterdayd.png';

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          priority
          src={ceasterday}
          alt="yuo just got ceasterday'd"
          title="yuo just got ceasterday'd"
          style={{
            maxWidth: 755,
            width: '100%',
            height: 'auto',
          }}
        />
      </main>
    </>
  );
}

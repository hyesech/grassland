import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>초원</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>초원</h1>

                <p className={styles.description}>10</p>

                <div className={styles.grid}>
                    <div className={styles.box}>
                        <a
                            href="https://nextjs.org/docs"
                            className={styles.card}
                        >
                            <h2>3층 &rarr;</h2>
                            <p></p>
                        </a>
                    </div>
                    <div className={styles.box}>
                        <a
                            href="https://nextjs.org/docs"
                            className={styles.card}
                        >
                            <h2>2층 &rarr;</h2>
                            <p></p>
                        </a>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
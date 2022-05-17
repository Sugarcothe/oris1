import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Hire competent salespeople faster</title>
          <meta
            name="description"
            content="Hire competent salespeople faster"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className={styles.hero}>
          <div className={styles.content}>
            <nav className={styles.navigation}>
              <Link passHref href="/">
                <div className={styles.logo}>
                  <img src="/images/logo.svg" alt="logo" />
                </div>
              </Link>
              <ul className={styles.menu}>
                <li>
                  {/* <Link href="https://calendly.com/joinoris/30min">
                    <a className={styles.menu__item}>Hire Now</a>
                  </Link> */}
                  <Link href="/hire">
                    <a className={styles.menu__item}>Hire Now</a>
                  </Link>
                </li>
                <li>
                  <Link href="/start">
                    <a className={styles.menu__item}>Join Oris</a>
                  </Link>
                </li>
                {/* <li>
									<Link href='/start'>
										<a className={styles.menu__item}>Login</a>
									</Link>
								</li> */}
              </ul>
            </nav>
            <div className={styles.mark}></div>
            <div>
              <h1 className={styles.title}>
                Hire Competent <span>Salespeople</span> that Drive{" "}
                <span>Growth.</span>
              </h1>
              <div className={styles.section}>
                <Link passHref href="/hire">
                  <a className={styles.getStarted}>Hire Now</a>
                </Link>
                <div style={{ lineHeight: 1.4, fontSize: 14 }}>
                  ORIS hires and trains smart, tech-savvy, and driven people to
                  lead sales and customer acquisition for multinationals and
                  fast growing startups in Africa.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image}></div>
        </section>
      </div>

      <section className={styles.howto}></section>
    </>
  );
}

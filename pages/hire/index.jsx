import Head from "next/head";
import Link from "next/link";
import styles from "./Auth.module.scss";

export default function index() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>ORIS ||Hire competent salespeople faster</title>
          <meta
            name="description"
            content="Hire competent salespeople faster"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.section}>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <img src="../images/basic.png" alt="" />
              <h4>BASIC</h4>
              <hr />
              <ul>
                <li>24/7 Lorem, </li>
                <li>365 Years ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <span>$0/Year</span>
              </ul>

              <Link
                target="blank"
                passHref
                // href="https://forms.gle/3B6Cxm7PHPSAg3Xx6"
                href="./hire/signup"
              >
                <a target="blank" className={styles.getStarted}>
                  SIGNUP
                </a>
              </Link>
            </div>
            <div className={styles.card1}>
              <img src="../images/standard.png" alt="" />
              <h4>STANDARD</h4>
              <hr />
              <ul>
                <li>24/7 Lorem, </li>
                <li>365 Years ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <span>$50/Year</span>
              </ul>

              <Link
                target="blank"
                passHref
                // href="https://forms.gle/3B6Cxm7PHPSAg3Xx6"
                href="./hire/signup"
              >
                <a target="blank" className={styles.getStarted}>
                  SIGNUP
                </a>
              </Link>
            </div>
            <div className={styles.card1}>
              <img src="../images/premium.png" alt="" />
              <h4>PREMIUM</h4>
              <hr />
              <ul>
                <li>24/7 Lorem, </li>
                <li>365 Years ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsu.</li>
                <span>$160/Year</span>
              </ul>

              <Link
                target="blank"
                passHref
                // href="https://forms.gle/3B6Cxm7PHPSAg3Xx6"
                href="./hire/signup"
              >
                <a target="blank" className={styles.getStarted}>
                  SIGNUP
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.howto}></section>
    </>
  );
}

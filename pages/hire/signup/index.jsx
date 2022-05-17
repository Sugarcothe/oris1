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

        <div className={styles.card}>
          <div className={styles.left}>
            <img src="../images/basic.jpg" alt="" />
          </div>
          <form className={styles.right}>
            <label htmlFor="fname">Company Name</label>
            <input type="text" />
            <br />
            <label htmlFor="fname">Company Address</label>
            <input type="text" />
            <br />
            <label htmlFor="fname">Email Address</label>
            <input type="text" />
            <br />
            <label htmlFor="fname">REG. NO</label>
            <input type="number" />
            <br />
            <label htmlFor="fname">Telephone</label>
            <input type="number" /> <br />
            <Link
              target="blank"
              passHref
              href="https://forms.gle/3B6Cxm7PHPSAg3Xx6"
            >
              <a target="blank" className={styles.getStarted}>
                SUBMIT
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

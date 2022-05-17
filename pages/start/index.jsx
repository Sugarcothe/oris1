import Head from "next/head";
import Link from "next/link";
import styles from "./Auth.module.scss";
import firebaseConfig from "../../firebase/init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
export default function Home() {
	const firebaseAuth = getAuth(firebaseConfig);
	const provider = new GoogleAuthProvider();
	const router = useRouter();
	const signIn = async () => {
		const { user } = await signInWithPopup(firebaseAuth, provider);
		const { refreshToken, providerData } = user;

		localStorage.setItem("user", JSON.stringify(providerData));
		localStorage.setItem("accessToken", JSON.stringify(refreshToken));
		router.push("/application");
	};
	return (
		<>
			<div className={styles.container}>
				<Head>
					<title>Hire competent salespeople faster</title>
					<meta
						name='description'
						content='Hire competent salespeople faster'
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<section className={styles.hero}>
					<div className={styles.content}>
						<nav className={styles.navigation}>
							<Link passHref href='/'>
								<a className={styles.logo}>
									<img src='/images/logo.svg' alt='logo' />
								</a>
							</Link>
							<ul className={styles.menu}>
								<li>
									<Link href='https://calendly.com/joinoris/30min'>
										<a className={styles.menu__item}>Hire Now</a>
									</Link>
								</li>
							</ul>
						</nav>
						<div className={styles.login}>
							<h1 className={styles.title}>Launch Your Career in Sales</h1>
							<p
								style={{
									lineHeight: 1.5,
									opacity: 0.8,
								}}>{`ORIS hires and trains smart, tech-savvy, and Driven people to lead sales and customer acquisition for multinationals and fast growing startups in Africa.`}</p>

							<Link href='https://forms.gle/m5iX59sr4i3LU8H46'>
								{/* <a className={styles.getStarted} onClick={signIn}> */}
								<a className={styles.getStarted}>Join ORIS</a>
							</Link>
							<div className={styles.desclamer}>
								{`By signing up you agree to Oris's Terms of Service and Privacy
								Policy, which outline your rights and obligations with respect
								to your use of the Service and processing of your data.`}
							</div>
						</div>
					</div>
					<div className={styles.image}></div>
				</section>
			</div>
		</>
	);
}

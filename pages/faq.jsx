import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Pages.module.scss";
export default function faq() {
	return (
		<main className={styles.wrapper}>
			<Head>
				<title>Hire competent salespeople faster</title>
				<meta name='description' content='Hire competent salespeople faster' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<nav className={styles.navigation}>
				<Link passHref href='/'>
					<div className={styles.logo}>
						<img src='/images/logo.svg' alt='logo' />
					</div>
				</Link>
				<ul className={styles.menu}>
					<li>
						<Link passHref href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link passHref href='/about'>
							<a>About</a>
						</Link>
					</li>

					<li>
						<Link passHref href='/start'>
							<a href=''>Join</a>
						</Link>
					</li>
					<li>
						<a href='https://calendly.com/joinoris/30min?month=2022-04'>Hire</a>
					</li>
				</ul>
			</nav>
			<section className={styles.title}>FAQ</section>

			<section className={styles.content}>
				<h1>
					Your questions, <br />
					answered.
				</h1>
				<ol>
					<li>
						<div>How do I register on ORIS?</div>
						<div>
							Registration is easy. If you want to join the ORIS community as a
							jobseeker, Kindly make use of this link to register{" "}
							<a href='https://www.joinoris.com/start'>Here</a>
							.
							<br />
							For employers/companies, Please book a session and one of our
							consultants will reach out to you{" "}
							<a href='https://calendly.com/joinoris/30min?month=2022-04'>
								Here
							</a>
						</div>
					</li>

					<li>
						<div>Is ORIS free to use?</div>
						<div>
							Yes, ORIS is free to use for everyone including job seekers,
							companies and recruiters
						</div>
					</li>

					<li>
						<div>
							Do we charge candidates a fee to place them in organizations?
						</div>
						<div>
							No, we do not charge candidates for placement. We,however, charge
							employers for recruiting for them
						</div>
					</li>

					<li>
						<div>Which industries do you recruit for?</div>
						<div>
							Our focus is on consumer goods industries such as FMCG,
							Pharmaceutical and other retail based companies.
						</div>
					</li>

					<li>
						<div>My question is not listed here, what do I do?</div>
						<div>
							Contact us via email (andrea.o@orisng.com), We are happy to answer
							your questions.
						</div>
					</li>
				</ol>
			</section>
		</main>
	);
}

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.scss";
import Image from "next/image";

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
			<section className={styles.title}>
				<h1>
					We help your business <span> thrive</span>.
				</h1>
				<div className={styles.image}>
					<Image
						src='/images/team.jpeg'
						alt='team'
						width={2000}
						height={834}
						layout='fill'
						objectPosition='right'
						objectFit='cover'
					/>
				</div>

				<p>
					We hire and train smart, tech-savvy, and driven people to lead sales
					and customer acquisition for multinationals and fast growing startups
					in Africa. We are highly selective about who we hire. As a result, we
					only provide competent and high performance salespeople to deliver
					outstanding business results.
				</p>
			</section>

			<section className={styles.content}>
				<h2>ORIS is a community of salespeople.</h2>
				<p>
					We hire and train smart, tech-savvy, and driven people to lead sales
					and customer acquisition for multinationals and fast growing startups
					in Africa. We are highly selective about who we hire. As a result, we
					only provide competent and high performance salespeople to deliver
					outstanding business results.
				</p>
				<h2>
					We provide tech solutions to drive salespeople’s performance and sales
					training to build the capability of its salespeople. We are highly
					tech-driven.
				</h2>
				<p>
					We hire and train smart, tech-savvy, and driven people to lead sales
					and customer acquisition for multinationals and fast growing startups
					in Africa. We are highly selective about who we hire. As a result, we
					only provide competent and high performance salespeople to deliver
					outstanding business results.
				</p>
				<h2>We are led by a salesman!</h2>
				<p>
					Michael Adesanya, CEO – Michael has been selling since he was 7. From
					hawking unbranded ice-water on the streets of Sagamu to leading
					hundreds of salespeople to deliver a $30m annual target, Michael has
					mastered the art of selling in Sub-saharan Africa. He has more than 10
					years of professional experience across sales and supply chain
					functions in consumer goods, fashion and pharma industries. Michael
					has worked for multinationals like P&G, PepsiCo, Gap Inc., Jumia and
					GBfoods among others. Michael is a YC founder and has an MBA degree
					from Stanford Graduate School of Business.
				</p>
				<h2>Values</h2>
				<p>
					Our performance management expertise and capability development is our
					identity. We provide tech solutions to drive salespeople’s performance
					and sales training to build the capability of its salespeople. We are
					highly tech-driven.
				</p>
				<h2>Contact</h2>
				<p>
					6B Adebowale Balogun Crescent
					<br />
					OPIC Estate, Isheri
					<br />
					Lagos.
					<br />
					+234 907 902 3168
					<br />
					oris@orisng.com
				</p>
			</section>
		</main>
	);
}

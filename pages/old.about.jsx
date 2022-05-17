import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.scss";

export default function About() {
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
								<div className={styles.logo}>
									<img src='/images/logo.svg' alt='logo' />
								</div>
							</Link>
							<ul className={styles.menu}>
								<li>
									<Link href='https://calendly.com/joinoris/30min'>
										<a className={styles.menu__item}>Hire Now</a>
									</Link>
								</li>
								<li>
									<Link href='/start'>
										<a className={styles.menu__item}>Join Oris</a>
									</Link>
								</li>
							</ul>
						</nav>
						<div>
							<h1 className={styles.title}>We help your business thrive</h1>
							<div className={styles.section}>
								<div style={{ lineHeight: 1.4, fontSize: 16 }}>
									We hire and train smart, tech-savvy, and driven people to lead
									sales and customer acquisition for multinationals and fast
									growing startups in Africa. We are highly selective about who
									we hire. As a result, we only provide competent and high
									performance salespeople to deliver outstanding business
									results.
								</div>
							</div>
						</div>
					</div>
					{/* <div className={styles.image}></div> */}
				</section>
			</div>

			<section className={styles.howto}>
				<Image
					src='/images/team.jpeg'
					alt='team'
					width={2000}
					height={834}
					layout='fill'
					objectPosition='right'
					objectFit='cover'
				/>
			</section>
			<section className={styles.about}>
				<div>
					<h1 style={{ opacity: 0.3 }}>We are led by a salesman!</h1>
				</div>
				<div>
					<p>
						<span>Michael Adesanya</span>, CEO – Michael has been selling since
						he was 7. From hawking unbranded ice-water on the streets of Sagamu
						to leading hundreds of salespeople to deliver a $30m annual target,
						Michael has mastered the art of selling in Sub-saharan Africa. He
						has more than 10 years of professional experience across sales and
						supply chain functions in consumer goods, fashion and pharma
						industries. Michael has worked for multinationals like P&G, PepsiCo,
						Gap Inc., Jumia and GBfoods among others. Michael is a YC founder
						and has an MBA degree from Stanford Graduate School of Business.
					</p>
				</div>
				<div>
					<h1 style={{ opacity: 0.3 }}>Values</h1>
				</div>
				<div>
					<p>
						Our performance management expertise and capability development is
						our identity.
					</p>
					<p>
						We provide tech solutions to drive salespeople’s performance and
						sales training to build the capability of its salespeople. We are
						highly tech-driven.
					</p>
				</div>
				<div>
					<h1 style={{ opacity: 0.3 }}>Get in touch</h1>
				</div>
				<div>
					<p>
						6B Adebowale Balogun Crescent <br />
						OPIC Estate, Isheri <br />
						Lagos.
						<br />
						+234 907 902 3168 <br />
						oris@orisng.com
					</p>
				</div>
			</section>
		</>
	);
}

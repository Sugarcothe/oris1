import Link from "next/link";
import styles from "./Footer.module.scss";
export function Footer() {
	return (
		<div className={styles.footer}>
			<section className={styles.wrapper}>
				<div className={styles.item}>
					<img src='/images/white-logo.svg' width={60} alt='' />
					<p className={styles.description}>
						ORIS hires and trains smart, tech-savvy, and driven people to lead
						sales and customer acquisition for multinationals and fast growing
						startups in Africa.
					</p>
				</div>
				<div className={styles.item}>
					<Link href='/'>
						<a>Home</a>
					</Link>
					<Link href='/about'>
						<a>Our Story</a>
					</Link>
					<Link href='/faq'>
						<a>FAQ</a>
					</Link>
				</div>
				<div className={styles.item}>
					<p>Suport</p>
					<p>
						(855) 615-0003
						<br />
						email@joinoris.com
					</p>
					<p>
						Monday – Friday
						<br />
						9:00 am – 3:00 pm EST
					</p>
					<p>
						Saturday
						<br />
						12:00 pm - 3:00 pm EST
					</p>
				</div>
				<div className={styles.item}>
					<p>Legal</p>
					<Link href='/terms'>
						<a>Terms of Service</a>
					</Link>
					<Link href='/policy'>
						<a>Privacy Policy</a>
					</Link>
				</div>
			</section>
		</div>
	);
}

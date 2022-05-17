import styles from "./Auth.module.scss";
export default function index() {
	return (
		<section className={styles.wrapper}>
			<h1>We Bring Job Offers to You</h1>
			<p>{`Join thousands of people who’ve found their dream job selling.`}</p>
		</section>
	);
}

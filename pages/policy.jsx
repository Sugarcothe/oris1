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
			<section className={styles.title}>Privacy Policy</section>

			<section className={styles.content}>
				<h2>1. Privacy Policy</h2>
				<p>
					Your privacy is critically important to us. At ORIS, we have a few
					fundamental principles: We don’t ask you for personal information
					unless we truly need it. We don’t share your personal information with
					anyone except to comply with the law, develop our products, or protect
					our rights. We don’t store personal information on our servers unless
					required for the on-going operation of one of our services. Below is
					our privacy policy which incorporates these goals. If you have
					questions about deleting or correcting your personal data, please
					contact our support team. ORIS, Inc. dba ORIS (“ORIS”) operates
					www.loopsupport.com. It is ORIS’s policy to respect your privacy
					regarding any information we may collect.
				</p>
				<h2>2. Website Visitors Like most</h2>
				<p>
					website operators, ORIS collects non-personally-identifying
					information of the sort that web browsers and servers typically make
					available, such as the browser type, language preference, referring
					site, and the date and time of each visitor request. ORIS’s purpose in
					collecting non-personally identifying information is to better
					understand how ORIS’s visitors use its website. From time to time,
					ORIS may release non-personally-identifying information in the
					aggregate, e.g., by publishing a report on trends in the usage of its
					website. ORIS also collects potentially personally-identifying
					information like Internet Protocol (IP) addresses for logged in users.
					ORIS only discloses logged in user IP addresses under the same
					circumstances that it uses and discloses personally-identifying
					information as described below.
				</p>{" "}
				<h2>3. Gathering of Personally-Identifying Information</h2>
				<p>
					We will never sell, rent, or share your personal information without
					your explicit consent, with or without personally identifying
					information. That includes any government (foreign or domestic) unless
					we are compelled by law. If we are required by law to disclose any of
					the information collected about you, we will attempt to provide you
					with notice (unless we are prohibited) that a request for your
					information has been made in order to give you an opportunity to
					object to the disclosure. We will attempt to provide this notice by
					email. We will independently object to overly broad requests for
					access to information about users of our site. ORIS records
					information about the currently active application or website on your
					computer. We record the following information: application name,
					website URL, window title, start time of activity, end time of
					activity, time of most recent user action, OS username, and computer
					machine name. We occasionally need to read browser data from your
					integrated third-party customer support platforms (e.g. Zendesk, Desk,
					Salesforce Service Cloud). We do not (and never will) collect
					individual keystroke values, screenshots, or anything nefarious. ORIS
					collects such information only insofar as is necessary or appropriate
					to fulfill the purpose of the visitor’s interaction with ORIS. ORIS
					does not disclose personally-identifying information other than as
					described below. And visitors can always refuse to supply
					personally-identifying information, with the caveat that it may
					prevent them from engaging in certain website-related activities. For
					individual accounts, no other user can see any of your data or
					personal information. In the future, we may introduce features to
					allow sharing of data, but this will be voluntary and opt-in only. For
					team accounts, sharing of data is controlled by the administrator of
					the account. No one outside of your organization will have access to
					any of your data.
				</p>
				<h2>4. Aggregated Statistics ORIS may</h2>
				<p>
					collect statistics about the behavior of visitors to its websites.
					ORIS may display this information publicly or provide it to others.
					However, ORIS does not disclose personally-identifying information
					other than as described below.
				</p>
				<h2>5. Protection of Certain Personally-Identifying</h2>
				<p>
					Information ORIS discloses potentially personally-identifying and
					personally-identifying information only to those of its employees,
					contractors and affiliated organizations that (i) need to know that
					information in order to process it on ORIS’s behalf or to provide
					services available at ORIS’s websites, and (ii) that have agreed not
					to disclose it to others. Some of those employees, contractors and
					affiliated organizations may be located outside of your home country;
					by using ORIS’s websites, you consent to the transfer of such
					information to them. ORIS will not rent or sell potentially
					personally-identifying and personally-identifying information to
					anyone. Other than to its employees, contractors and affiliated
					organizations, as described above, ORIS discloses potentially
					personally-identifying and personally-identifying information only in
					response to a subpoena, court order or other governmental request, or
					when ORIS believes in good faith that disclosure is reasonably
					necessary to protect the property or rights of ORIS, third parties or
					the public at large. If you are a registered user of an ORIS website
					and have supplied your email address, ORIS may occasionally send you
					an email to tell you about new features, solicit your feedback, or
					just keep you up to date with what’s going on with ORIS and our
					products. We primarily use our various product blogs to communicate
					this type of information, so we expect to keep this type of email to a
					minimum. If you send us a request (for example via a support email or
					via one of our feedback mechanisms), we reserve the right to publish
					it in order to help us clarify or respond to your request or to help
					us support other users. ORIS takes all measures reasonably necessary
					to protect against the unauthorized access, use, alteration or
					destruction of potentially personally-identifying and
					personally-identifying information.
				</p>
				<h2>6. Cookies </h2>
				<p>
					A cookie is a string of information that a website stores on a
					visitor’s computer, and that the visitor’s browser provides to the
					website each time the visitor returns. ORIS uses cookies to help ORIS
					identify and track visitors, their usage of ORIS website, and their
					website access preferences. ORIS visitors who do not wish to have
					cookies placed on their computers should set their browsers to refuse
					cookies before using ORIS’s websites, with the drawback that certain
					features of ORIS’s websites may not function properly without the aid
					of cookies.
				</p>
				<h2>7. Business Transfers </h2>
				<p>
					If ORIS, or substantially all of its assets, were acquired, or in the
					unlikely event that ORIS goes out of business or enters bankruptcy,
					user information would be one of the assets that is transferred or
					acquired by a third party. You acknowledge that such transfers may
					occur, and that any acquirer of ORIS may continue to use your personal
					information as set forth in this policy.
					<h2>8. Privacy Policy Changes</h2>
					<p>
						Although most changes are likely to be minor, ORIS may change its
						Privacy Policy from time to time, and in ORIS’s sole discretion.
						ORIS encourages visitors to frequently check this page for any
						changes to its Privacy Policy. Your continued use of this site after
						any change in this Privacy Policy will constitute your acceptance of
						such change.
					</p>
				</p>
			</section>
		</main>
	);
}

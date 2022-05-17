import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Pages.module.scss";
export default function faq() {
	return (
		<div className={styles.wrapper}>
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
			<section className={styles.title}>Terms of Service</section>

			<section className={styles.content}>
				<h2>1. Acceptance</h2>
				<p>
					ORIS provides its service (“Service”) to you, subject to the following
					Terms of Service (“TOS”). The TOS tell you what you can expect from
					the Service, and what ORIS expects of you. ORIS may amend the TOS at
					any time by posting an amended TOS on our website.
				</p>
				<h2>2. Registration Obligations</h2>
				<p>
					{`You must register for a membership in order to access the Service.
					When completing the registration form, you will provide true,
					accurate, and complete information, and maintain and promptly update
					this information. If you provide any information that is untrue,
					inaccurate, or incomplete, or ORIS has reasonable grounds to suspect
					that the information is untrue, inaccurate, or incomplete, ORIS has
					the right to suspend or terminate your membership and access to the
					Service. You are responsible for obtaining access to the Service,
					which access may involve third party fees (such as Internet service
					provider charges). In addition, you must provide and are responsible
					for all equipment necessary to access the Service. You will enter a
					password and login name during the registration process. You are
					responsible for maintaining the confidentiality of your password and
					login name, and are responsible for all activities that occur with
					your password and login name, including fees incurred and all
					purchases made by your membership on the Service. This means that,
					unless your password and login name, or credit card information is
					obtained unlawfully or fraudulently, you will be responsible for all
					fees incurred and purchases made by your membership. You will
					immediately notify ORIS of any unauthorized use of your membership or
					any other breach of security.`}
				</p>{" "}
				<h2>3. Membership, Fees</h2>
				<p>
					{`Individuals may obtain a trial membership with the Service without
					paying a fee. ORIS will charge fees to access certain components of
					the Service. If you must pay a fee to access a component of the
					Service, this information will be posted by ORIS on the Service. You
					may use a credit card to pay these fees. When you use a credit card
					for payment, you represent to ORIS that you are the authorized card
					holder. For recurring fees, ORIS will charge your credit card each
					month. For one-time fees, ORIS will charge your credit card once. ORIS
					reserves the right to change its fees or billing methods. If any
					change is unacceptable to you, you may cancel your membership, but
					ORIS will not refund any fees that may have accrued to your membership
					before you cancel it. ORIS may also charge you for any sales or use
					taxes to which the Service is subject.`}
				</p>
				<h2>4. Prohibited Uses</h2>
				<p>
					{`You agree that you will not Impersonate any person, including a ORIS
					employee or agent on the Service; violate any local, state, or
					national law through or on the Service; harass people through or on
					the Service; collect or store data about other people using the
					Service; use any device, software or routine to interfere or attempt
					to interfere with the proper working of the Service; take any action
					that imposes an unreasonable or disproportionately large load on the
					infrastructure of the Service; use the Service in any manner other
					than as expressly authorized in the TOS; reproduce, duplicate, copy,
					sell, resell, or exploit for any commercial purposes, any portion of
					the Service, use of the Service, or access to the Service.`}
				</p>
				<h2>5. Ownership and Restrictions</h2>
				<p>
					{`The license granted in these TOS does not constitute a transfer or
					sale of ORIS’s ownership rights in the ORIS Database. ORIS retains all
					right, title, and interest in and to the ORIS Database including all
					related intellectual property rights. You will use your best efforts
					to prevent and protect the contents of the ORIS Database from
					unauthorized use or distribution. You must not rent, lease,
					sublicense, sell, assign, loan, distribute, transmit, or otherwise
					transfer any content of the service, including the ORIS Database, or
					your rights and obligations pursuant to the TOS. You must not copy,
					reproduce, alter, modify, create derivative works, or publicly display
					any content of the Service, including the ORIS Database, unless
					expressly authorized in the TOS.`}
				</p>
				<h2>6. Children</h2>
				<p>
					{`	By registering, installing, and accepting these TOS you represent to
					ORIS that you are at least 13 years old. ORIS’s policy is to prohibit
					children under the age of 13 from purchasing, accessing, registering,
					or using any of ORIS’s products and services unless under the
					guidance, supervision and consent of their parents, guardians and/or
					authorized school officials. We rely on parents and guardians to
					ensure minors only use ORIS products and services if they can
					understand their rights and responsibilities as stated in this TOS and
					our Privacy Policy. For teachers or parents, if you want children
					under the age of 13 to create their own ORIS accounts, then you (or
					your school) assume the responsibility for complying with the U.S.
					Children's Online Privacy Protection Act (“COPPA”) and, to the extent
					applicable, The Family Educational Rights and Privacy Act (“FERPA”).
					This means you must notify childrens’ parents/guardians of the
					information to be collected and obtain parental/guardian consent
					before collecting and sharing with the ORIS products and services the
					personal information of children under the age of 13 in order to
					establish an account or use the ORIS products and service. Teachers
					may, under appropriate, circumstances provide such consent on behalf
					of parents/guardians. For more information on complying with COPPA,
					see the Federal Trade Commission’s website at `}
					<a href='http://www.ftc.gov/privacy/coppafaqs.shtm'>
						http://www.ftc.gov/privacy/coppafaqs.shtm
					</a>
					.
				</p>
				<h2>7. ORIS Privacy Policy</h2>
				<p>
					{`Certain registration information and other information about you may
					be collected by ORIS and through the Service. ORIS’s use of this
					information is governed by the ORIS Privacy Policy.`}
				</p>
				<h2>8. User Warranty</h2>
				<p>
					{`You represent and warrant to ORIS: (a) that you have full power,
					authority, and legal capacity to enter into the Agreements and follow
					its obligations, and if you are registering on behalf of a company or
					other entity, you have the authority to bind your principal or
					employer company; (b) you will provide complete and accurate
					information to ORIS; and (c) you will pay all charges that you incur
					at ORIS’s then-current rates.`}
				</p>
			</section>
		</div>
	);
}

import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userAccessToken, userData } from "../../utils/user";
//import ConversationalForm from "../../components/conversation";
const ConversationalForm = dynamic(
	() => import("../../components/conversation"),
	{ ssr: false }
);
export default function Application() {
	const router = useRouter();
	const [user, setUser] = useState(undefined);
	const [init, setInit] = useState(undefined);
	useEffect(() => {
		const token = userAccessToken();
		!token && router.push("/login");

		const me = userData();
		setUser(me?.[0]);

		setInit(token);
	}, [router]);

	console.log(user);
	return (
		<main style={{ minHeight: "100vh" }}>
			<Head>
				<title>Hire competent salespeople faster</title>
				<meta name='description' content='Hire competent salespeople faster' />
			</Head>
			{init && <ConversationalForm user={user} />}
		</main>
	);
}

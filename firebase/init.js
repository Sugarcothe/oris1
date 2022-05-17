import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCve_RTSLR4J6YXDZusLp1SmNWTzSS5ZZU",
	authDomain: "oris-e1f4c.firebaseapp.com",
	projectId: "oris-e1f4c",
	storageBucket: "oris-e1f4c.appspot.com",
	messagingSenderId: "357256177035",
	appId: "1:357256177035:web:6fa83d59cf219953067b8e",
	measurementId: "G-QVYHDJG89Y",
};

const app = initializeApp(firebaseConfig);
export default app;

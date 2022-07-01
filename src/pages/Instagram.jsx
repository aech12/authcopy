import { useSearchParams, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Insta = () => {
	const [tokenCode, setTokenCode] = useState("");
	const location = useLocation();

	// useEffect(() => {
	// 	const getUrl = async () => {
	// 		const res = await axios.post("http://localhost:5000/insta/get-token", { code: location.pathname.substring(13) });
	// 		console.log("DATAA", res);
	// 	};;

	// 	getUrl();
	// }, []);

	const getToken = async () => {
		const res = await axios.post(
			`https://api.instagram.com/oauth/access_token\client_id=349029660727361\client_secret=b76dc76caf88f307c008d853837c7362\grant_type=authorization_code\redirect_uri=https://authcopy.vercel.app/instagram\code=${tokenCode}`
		);
		console.log("DATAA", res);
	};

	return (
		<div className="">
			<p>Instagram</p>
			<input type="text" value={tokenCode} onChange={(e) => setTokenCode(e.target.value)} />
			<p>{tokenCode}</p>
			<button onClick={() => getToken()}>EXCHANGE</button>
		</div>
	);
};

export default Insta;

import { useSearchParams, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Insta = () => {
	const location = useLocation();

	// console.log(location.search.substring(6), "userId",);
	useEffect(() => {
		const getUrl = async () => {
			// console.log(location.pathname.substring(13), "userId");
			const res = await axios.post("http://localhost:5000/insta/get-token", { code: location.pathname.substring(13) });
			console.log("DATAA", res);

			// const init = await axios.post(`https://api.tagram.com/oauth/access_token\client_id={app-id}\client_secret=585678779606719\grant_type=authorization_code\redirect_uri=https://authcopy.vercel.app/insta/auth\code=${location.pathname.substring(13)}`, {headers: {"Access-Control-Allow-Origin": "*"}} );
			// console.log(init)

			// window.open("http://localhost:5000/auth/facebook", "_self");
		};;

		getUrl();
	}, []);

	return (
		<div className="">
			<p>INSTA2</p>
			<p>INSTA2</p>
			<p>INSTA2</p>
		</div>
	);
};

export default Insta;

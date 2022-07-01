import { useSearchParams, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Insta = () => {
	const location = useLocation();

	// console.log(location.search.substring(6), "userId",);
	useEffect(() => {
		const getUrl = async () => {
			console.log(location.pathname.substring(13), "userId");
			const res = await axios.post("http://localhost:5000/insta/get-token", {code:location.pathname.substring(13)});
			// const data = await axios.post("https://api.instagram.com/oauth/access_token%20/%20client_id=585678779606719/%20client_secret=f7cf10e31240bb35f46b2808da723949/%20grant_type=authorization_code%20/%20redirect_uri=https://authcopy.vercel.app/insta%20/code=AQDTGZ93Hu_q0AyEFK3RbzKzGcn_SiTnsg0JYVVznvB46PJ29Q4ZtMd1N04LMd7UAwAHADRQuIFUfUCPCwt_bHV1G2h9NcgC_zWqhF3q3z7Qdjtvm6itu9yfmgXsJc0sOD0WruOGmaQiWZLDN-IFPDNcAbSao4xbAdfd2dusTyhWzRxKWIJ2Fn2zzff_WLSbMOxNJHy74UFu68ft3jXEsEADY1hSlkApcC0h4g5M-xMXbA#_")

			console.log("DATAA", res);
		};

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

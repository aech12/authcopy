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
		
      // window.open("http://localhost:5000/auth/facebook", "_self");

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

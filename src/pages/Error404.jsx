import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "react-image";

import Snorlax from "../img/Snorlax.svg";
import Button from "../components/Button";

import "../styles/Error404.css"


const Error404 = () => {
	const navigate = useNavigate();

	const handleBack = useCallback(() => {
		navigate("/");
	}, []);

	return (
		<div>
			<h1 className="title-h1-error">
				4<Img src={Snorlax} className="image-error" alt="4-Snorlax-4" />4
			</h1>
			<p className="text-error">
				<span className="span-error">Oops!</span> A wild Snorlax has blocked
				your path!
			</p>
			<Button color={"#025554"} handleEvent={handleBack} text="GO HOME" />
		</div>
	);
};

export default Error404;

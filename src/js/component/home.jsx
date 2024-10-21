import React from "react";
import {Navbar} from "./navbar";
import {Jumbotron} from "./jumbotron";
import {Card} from "./card";
import {Footer} from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;

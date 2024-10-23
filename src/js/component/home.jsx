import React from "react";
import {Navbar} from "./navbar";
import {Jumbotron} from "./jumbotron";
import {Card} from "./card";
import {Footer} from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="page-container" style={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
			<div className="contect-wrap" style={{flex:"1"}}>
			  <Navbar />
			  <div className="jumbotron-card-container" style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
				<div className="jumbotron-container" style={{width: "50%", padding: "10px", marginBottom: "20px"}}>
				  <Jumbotron />
				</div>
			      <div className="card-container" style={{display:"flex", justifyContent:"space-between",
                    gap:"20px", padding:"20px", flexWrap:"wrap"}}>
			        <Card />
			        <Card />
			        <Card />
			        <Card />
			      </div>
			  </div>
			</div>
			<div className="footer-container" style={{width:"100%",background:"black", textAlign:"center",
				 color:"white", padding:"20px",position:"relative"}}>
			  <Footer />
			</div>

		</div>
	);
};

export default Home;

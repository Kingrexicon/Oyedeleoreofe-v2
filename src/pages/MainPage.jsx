import React from "react";
import Navbar from "../components/Navbar";
import WorkDone from "../components/WorkDone";
import Hero from "../components/Hero";
import Logoloop from "../components/Logoloop";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

const MainPage = () => {
	return (
		<div className="bg-base-200">
			<Navbar />

			<Hero />
			<Logoloop />
			<Experience/>
			<WorkDone />
			<Footer />
		</div>
	);
};

export default MainPage;

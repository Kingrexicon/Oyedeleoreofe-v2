import React from "react";
import Navbar from "../components/navbar";
import WorkDone from "../components/WorkDone";
import Hero from "../components/Hero";



const MainPage = () => {
	return (
		<div>
			<Navbar />
			
			<Hero />
			<WorkDone />
			{/* <div class="text-orange-500"> hero section</div> */}
		</div>
	);
};

export default MainPage;

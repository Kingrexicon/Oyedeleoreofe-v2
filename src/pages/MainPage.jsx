import React from "react";
import Navbar from "../components/Navbar";
import WorkDone from "../components/WorkDone";
import Hero from "../components/Hero";
import Logoloop from  "../components/Logoloop"



const MainPage = () => {
	return (
		<div className="bg-base-200">
			<Navbar />
			
			<Hero />
<Logoloop />
			<WorkDone />
			{/* <div class="text-orange-500"> hero section</div> */}
		</div>
	);
};

export default MainPage;

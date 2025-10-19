import React from "react";
import Profile from "./Profile";

const Hero = () => {
	return (
		<div className="hero bg-base-200 min-h-screen my-4">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<Profile />
				<div>
					<h1 className="text-5xl font-bold">About Me</h1>
					<p className="py-6">
						I started out as a creative, designing visual assets that helped family and community events stand out. That curiosity about how design and systems connect pushed me to start building websites — first for my university’s Taekwondo club, then for my church’s outreach team. Each project sharpened my ability to translate real-world needs into working tools. When I discovered CRM automation, I realized I could multiply that impact by saving teams hours of manual effort every week. Freelancing for diverse clients taught me to deliver polished, reliable solutions on deadline and to communicate like a partner, not just a coder. Today, I bring that same mix of design intuition, automation know-how, and delivery discipline to help teams build tools that look great and work even better.
					</p>
					
					<button className="btn btn-primary">Get In Touch</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;

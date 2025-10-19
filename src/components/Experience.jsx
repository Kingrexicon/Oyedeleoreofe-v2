import React from "react";

const Experience = () => {
	return (
		<div className="flex w-full  flex-col my-5 pt-5">
			<div>
				<h1 className="text-4xl text-center mx-auto font-bold"> Professional Experience</h1>
				<p>
					My journey as a developer, building scalable applications and
					delivering impactful solutions
				</p>
			</div>
<div className="divider "></div>
			<div className="card px-2 bg-base-300 mx-3 rounded-box grid py-2 gap-2">
				<div className="flex justify-between ">
					<p>MERN fullstack developer</p>
					<p>April 2025</p>
				</div>
				<p className="font-bold">100Devs</p>
				<ul className="px-3 mx-3 gap-2 list-disc">
					<li>
						Developed full-stack web applications using JavaScript, React,
						Node.js, Express, and MongoDB, applying best practices in modern
						development
					</li>
					<li>
						Built responsive and user-friendly frontends coupled with efficient
						and secure backend APIs.
					</li>
					<li>
						I gained hands-on experience building real-world projects for actual
						clients under tight deadlines. This experience honed my ability to
						deliver scalable, clean, and maintainable code while collaborating
						closely with team members and stakeholders.
					</li>
				</ul>
			</div>

			<div className="divider" >{' '}</div>

			<div className="card px-2 mx-3 bg-base-300 rounded-box grid py-2 gap-3">
				<div className="flex  justify-between ">
					<p>IT Intern</p>
					<p>January 2023 - March 2023</p>
				</div>
				<p className="font-bold">
					Obafemi Awolowo University {"("}Center of Distance Learning{")"}
				</p>
				<ul className="px-3 mx-3 gap-2 list-disc">
					<li>
						Implemented upgrades, and registered students for computer-based
						tests increasing efficiency by 25% andsolving student issues
						promptly.
					</li>
					<li>
						Conducted comprehensive software audits, ensuring 100% compliance
						and reducing potential security risks by 30%.
					</li>
				</ul>
			</div>
            <div className="divider">{' '}</div>
            
			<div className="card px-2 bg-base-300 mx-3 rounded-box grid py-2 gap-3">
				<div className="flex  justify-between ">
					<p>Web Developer Intern</p>
					<p>June 2022 - October 2022</p>
				</div>
				<p className="font-bold">SQI</p>
				<ul className="px-3 mx-3 gap-2 list-disc">
					<li>
						Collaborated on coding projects, contributing to a 20% reduction in
						page load times.
					</li>
					<li>
						
						Implemented responsive design updates, boosting website
						accessibility by 25%
					</li>
				</ul>
			</div>
            <div className="divider" ></div>
		</div>
	);
};

export default Experience;

import React from "react";
import kr from "../assets/image/kr.png";
import kri from "../assets/image/Graphic1.svg"
import {
	SiGithub,
	SiGmail,
	SiInstagram,
	SiLinkedin,
	SiWhatsapp,
	SiX,
} from "react-icons/si";
import { FaGlobe, FaPassport, FaPhone, FaReact } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content flex lg:flex-row-reverse flex-col-reverse justify-between p-10">
			<aside>
				<img src={kr} className="w-20 h-20" alt="" />
				<p>
					Kingrexicon.
					<br />
					Providing reliable tech since 2021
				</p>
			</aside>
			<nav>
				<h6 className="footer-title font-bold"> Wanna reach out?</h6>
				<p>
					Whether you're looking to enhance an existing project or build
					something from scratch, I'm always open to imaginations and projects.
				</p>
				<div className="grid grid-flow-col gap-3">
					<a href="https://wa.me/09065189953">
						<SiWhatsapp className="w-7 h-6" />
					</a>
					<a href="tel:+2349085189953">
						<FaPhone className="w-7 h-6" />
					</a>
					<a href="mailto:oyedeleoreofe@gmail.com">
						<SiGmail className="w-7 h-6" />
					</a>
					<a href="https://x.com/Kingrexicon">
						<SiX className="w-7 h-6" />
					</a>
					<a href="https://www.linkedin.com/in/oyedele-oreofeoluwa/">
						<SiLinkedin className="w-7 h-6" />
					</a>
					<a href="https://www.instagram.com/kingrexicon/">
						<SiInstagram className="w-7 h-6" />
					</a>

					<a href="https://github.com/kingrexicon">
						<SiGithub className="w-7 h-6" />
					</a>
				</div>
				<div className="grid grid-flow-col gap-45">
					<a href="https://docs.google.com/document/d/1aoFnn7-P9FuZ4uihziWWlIPTND0trzeW1wy1YN0_7Yc/edit?usp=sharing" className="flex text-gray-500 text-indigo-400 ">
						<p>Resume</p>
						<FaPassport className="w-6 h-6" />
					</a>
					<a href="https://oyedeleoreofe.netlify.app/" className="hover:text-gray-500 text-indigo-400 flex">
                    <p>
                        oyedeleoreore-V1
                        </p>
						<img src={kri} className="w-6 h-6 " alt="" />
					</a>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;

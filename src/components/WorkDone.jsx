import ChromaGrid from "./gsap components/ChromaGrid";
import callOFDUTY from "../assets/image/callOfDuty.png";
import krsocial from "../assets/image/krsocial.png";
import flipIT from "../assets/image/flip it.png";
import krjobs from "../assets/image/kr-jobs.png";

const WorkDone = () => {
	const items = [
		{
			image: callOFDUTY,
			title: "KR-MEDIUM",
			subtitle: "Site link",
			handle: "source code",
			borderColor: "#10B981",
			gradient: "linear-gradient(210deg,#10B981,#000)",

			url: "https://kr-medium.onrender.com",
			gitUrl: "https://github.com/Kingrexicon/Kr-medium",
		},
		{
			image: krsocial,
			title: "KR-SOCIAL",
			subtitle: "Site link",
			handle: "source code",
			borderColor: "#3B82F6",
			gradient: "linear-gradient(145deg, #3B82F6, #000)",
			url: "https://krsocial.onrender.com",
			gitUrl: "https://github.com/Kingrexicon/binary-upload-boom",
		},
		{
			image: flipIT,
			title: "KR-FLIPIT",
			subtitle: "Site link",
			handle: "source code",
			borderColor: "#f59e0bff",
			gradient: "linear-gradient(165deg,#F59E0B,#000)",
			url: "https://flip-it-6bzh.onrender.com",
			gitUrl: "https://github.com/Kingrexicon/flip_it",
		},
		{
			image: krjobs,
			title: "KR-JOBS",
			subtitle: "Site link",
			handle: "source code",
			borderColor: "#e66999ff",
			gradient: "linear-gradient(165deg,#e66999ff,#000)",
			url: "https://kr-jobs.netlify.app/",
			gitUrl: "https://github.com/Kingrexicon/kr-jobs",
		},
	];

	return (
		<div style={{ height: "", position: "relative" }}>
			<div>
				<p className="text-4xl text-center mx-auto font-bold">
					Featured Projects
				</p>
				<p className="my-3 mx-5">
					A showcase of my recent work in full-stack development
				</p>
			</div>
			<ChromaGrid
				items={items}
				radius={300}
				damping={0.45}
				fadeOut={0.6}
				ease="power3.out"
				className="p-3"
			/>
		</div>
	);
};

export default WorkDone;

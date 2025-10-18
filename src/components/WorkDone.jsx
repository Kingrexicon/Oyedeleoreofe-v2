import ChromaGrid from "./gsap components/ChromaGrid";
import callOFDUTY from "../assets/image/callOfDuty.png";
import krsocial from "../assets/image/krsocial.png";
import flipIT from "../assets/image/flip it.png";

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
			title: "KR_SOCIAL",
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
				borderColor: "#F59E0B",
			gradient: "linear-gradient(165deg,#F59E0B,#000)",
			url: "https://flip-it-6bzh.onrender.com",
			gitUrl: "https://github.com/Kingrexicon/flip_it",
		},
	];

	return (
		<div style={{ height: "", position: "relative" }}>
			{/* <P>Recent works</P> */}
			<ChromaGrid
				items={items}
				radius={300}
				damping={0.45}
				fadeOut={0.6}
				ease="power3.out"
			/>
		</div>
	);
};

export default WorkDone;

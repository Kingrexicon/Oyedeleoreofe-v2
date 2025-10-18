import React from "react";
import ProfileCard from "./profilecard/ProfileCard";
import headshot from '../assets/image/headshot.png'
import kr from '../assets/image/kr.png'

const Profile = () => {
	return (
		<div>
			<ProfileCard
				name="Oreofeoluwa J. Oyedele"
				title="Software Engineer"
				handle="Kingrexicon"
				status="Online"
				contactText="Contact Me"
				avatarUrl= {headshot}
				grainUrl = {kr}
				showUserInfo={true}
				enableTilt={true}
				enableMobileTilt={false}
				onContactClick={() => console.log("Contact clicked")}
			/>
		</div>
	);
};

export default Profile;

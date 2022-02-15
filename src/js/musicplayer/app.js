import React from "react";
import Content from "./content";
import Topbar from "./topbar";
import Playbar from "./playbar";
import Sidebar from "./sidebar";

export const MusicPlayer = () => {
	return (
		<>
			<div className="musicplayer">
				<Topbar />
				<Sidebar />
				<Content />
				<Playbar />
			</div>
		</>
	);
};

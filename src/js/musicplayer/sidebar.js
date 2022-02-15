import React from "react";
import logo from "../../img/spotify-white.png";
const Sidebar = ({ children }) => {
	return (
		<div className="sidebar">
			<img src={logo} height={50} />
			{children}
		</div>
	);
};

export default Sidebar;

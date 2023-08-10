import Link from "./Link";
import React from "react";

const Sidebar = () => {
	const links = [
		{ label: "Dropdown", path: "/" }, // default page
		{ label: "Accordion", path: "/accordion" },
		{ label: "Buttons", path: "/buttons" },
		{ label: "Modal", path: "/modal" },
		{ label: "Table", path: "/table" },
		{ label: "Counter", path: "/counter" },
		{ label: "SignUp", path: "/sign_up" },
	];

	const renderLinks = links.map((link) => {
		return (
			<Link
				key={link.label}
				to={link.path}
				className="py-2.5 px-5 hover:text-blue-700 hover:bg-white"
				activeClassName={"text-blue-700 bg-white"}
			>
				{link.label}
			</Link>
		);
	});
	return (
		<div className="flex flex-col fixed divide-y top-0 pt-10 left-0 w-36 h-screen border-r bg-gray-100">
			{renderLinks}
		</div>
	);
};

export default Sidebar;

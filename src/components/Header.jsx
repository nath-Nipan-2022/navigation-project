import React, { useRef, useState } from "react";
import Link from "./Link";
import Dropdown from "./Dropdown";
import { MdMenu } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
	const navLinks = [
		{
			label: "Home",
			path: "/",
		},
		{
			label: "About",
			path: "/about",
		},
		{
			label: "Contact",
			path: "/contact",
		},
		{
			label: "Sign Up",
			path: "/sign_up",
		},
		{
			label: "Explore more",
			subLinks: [
				{ label: "Accordion Page", path: "/accordion" },
				{ label: "Modal Page", path: "/modal" },
				{ label: "Email", path: "/email" },
				{ label: "Password", path: "/password" },
			],
		},
	];

	const [showDropdown, setShowDropdown] = useState(false);
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const handleDropdown = (type) => {
		!openMobileMenu && setShowDropdown(() => type === "open");
	};

	return (
		<header className="relative flex items-center gap-2 justify-between p-2">
			{openMobileMenu && (
				<div
					className="fixed inset-0 bg-gray-500/50"
					onClick={() => setOpenMobileMenu(false)}
				></div>
			)}
			<nav
				className={`fixed h-screen w-52 pt-8 md:p-0 bg-slate-100 md:bg-transparent md:h-auto md:w-auto top-0 md:top-auto right-0 translate-x-full ${
					openMobileMenu ? "animate-slide" : ""
				} md:relative md:animate-none md:left-auto md:translate-x-0 flex flex-col md:flex-row md:justify-between gap-1 md:gap-3`}
			>
				{navLinks.map((link) => {
					if (link.path) {
						return (
							<Link
								to={link.path}
								key={link.label}
								className="py-2.5 px-5 hover:text-blue-700 hover:bg-white"
							>
								{link.label}
							</Link>
						);
					}
					return (
						<div
							key={link.label}
							onMouseEnter={() => handleDropdown("open")}
							onMouseLeave={() => handleDropdown("close")}
							onClick={() => setShowDropdown((prev) => !prev)}
							className="relative font-medium md:hover:bg-white"
						>
							<div className="flex justify-between items-center cursor-pointer border-y md:border-0 py-2.5 px-5">
								<span>{link.label}</span>
								<GoChevronDown className="mt-1" />
							</div>
							{showDropdown && (
								<div className="md:absolute left-0 top-1/2 w-full md:w-28 opacity-0 md:-translate-x-4 animate-slide">
									<div
										className={` flex flex-col divide-y
											md:mt-6 md:w-48 md:shadow md:rounded-lg md:bg-white`}
									>
										{link.subLinks.map((link) => {
											return (
												<Link
													to={link.path}
													className="p-2 px-6 hover:text-blue-700"
													key={link.label}
												>
													{link.label}
												</Link>
											);
										})}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</nav>
			<span
				className="p-1 rounded bg-white hover:bg-gray-100 cursor-pointer shadow"
				onClick={() => setOpenMobileMenu(true)}
			>
				<MdMenu className="block md:hidden" />
			</span>
		</header>
	);
};
export default Header;

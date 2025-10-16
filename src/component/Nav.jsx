import { Link } from "react-router-dom";

import React from "react";

const Nav = () => {
	return (
		<nav className='h-[3rem] w-full flex justify-between items-center font-semibold text-blue-900 px-4 text-xl'>
			<h3 className='font-bold text-sm text-blue-900 text-center'>
				JARURAT <br /> CARE
			</h3>
			<Link to='/'>Home</Link>
			<Link to='/patient'>Patient</Link>

			<Link to='/about'>About US</Link>
		</nav>
	);
};

export default Nav;

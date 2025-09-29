import Nav from "./routes/Nav";
const App = () => {
	return (
		<>
			<div className='navBar flex justify-between items-center p-4 bg-white-800 text-white lg:px-10'>
				<span className='text-3xl font-bold text-blue-600'>
					ILETS PREP
				</span>
				<button className='text-3xl font-thin text-black '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-menu-icon lucide-menu'
					>
						<path d='M4 5h16' />
						<path d='M4 12h16' />
						<path d='M4 19h16' />
					</svg>
				</button>
			</div>
			<Nav />
			<footer className='mt-8'>
				<div className='px-[2rem] py-4 bg-gray-800 text-white flex flex-col justify-center items-center'>
					<div className='flex gap-10 mb-4'>
						<span>About</span>
						<span>Privacy Policy</span>
						<span>Terms</span>
					</div>
					<p className='text-sm'>
						&copy; 2025 ILETS Prep. All rights reserved.
					</p>
				</div>
			</footer>
		</>
	);
};

export default App;

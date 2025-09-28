import Hero from "./page/Hero";
import Features from "./page/Features";
import Testimonials from "./page/Testimonials";

const App = () => {
	return (
		<>
			<div className=' navBar flex justify-between items-center p-4 bg-white-800 text-white lg:px-10'>
				<logo className='text-3xl font-bold text-blue-600'>
					ILETS PREP
				</logo>
				<button className='text-3xl font-thin text-black '>

          
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='lucide lucide-menu-icon lucide-menu'
					>
						<path d='M4 5h16' />
						<path d='M4 12h16' />
						<path d='M4 19h16' />
					</svg>
				</button>
			</div>
			<Hero />

			<Features />

			<Testimonials />

			<footer className='mt-8'>
				<div className=' px-[2rem] py-4 bg-gray-800 text-white flex flex-col justify-center items-center'>
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

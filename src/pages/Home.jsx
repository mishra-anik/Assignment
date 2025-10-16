import React from "react";

const Home = () => {
	return (
		<>
			<main className='flex flex-col min-h-screen gap-8 items-center justify-center text-center xl:justify-start py-0'>
				<h1 className='text-[#0464C4] mt-2 text-4xl md:text-6xl lg:text-8xl font-bold'>
					JARURAT CARE
				</h1>

				<h1 className='text-4xl'>Jaisi Jarurat Vaisi Care</h1>
				<p className='text-blue-900 max-w-2xl text-xl px-4'>
					Providing support, guidance, hope and personalized care for
					cancer patients and their families. Here to ensure you never
					face your journey alone.
				</p>
				<button className='bg-[#0464C4] text-white text-xl px-8 py-4 rounded-full hover:bg-blue-700 transition'>
					Seek Help
				</button>
			</main>

		
		</>
	);
};

export default Home;

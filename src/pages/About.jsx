const About = () => {
	return (
		<div className='w-full min-h-screen flex flex-col items-center  gap-8   xl:justify-start py-0'>
			<div
				className='w-full min-h-[60vh]  bg-cover bg-[url("https://www.jarurat.care/_app/immutable/assets/hero_jarurat.Cnqcn7oB.png")]  bg-center bg-contain sm:bg-cover 
    bg-no-repeat  flex  items-center text- justify-end flex-col '
			>
				<h1 className='lg:text-8xl text-4xl text-white mb-[6rem]'>
					Get Involved <span className='text-blue-600'>Today</span>
				</h1>
			</div>

			<div>
				<h1 className='text-2xl text-blue-900 font-semibold'>
					About us
				</h1>
				<p className='text-[1.2rem]'>
					At Jarurat Care Foundation, we understand that facing cancer
					can be overwhelming, and no one should have to go through it
					alone. That’s why we’ve made it our mission to stand by
					those affected by cancer, offering unwavering support every
					step of the way. We’re a community-driven NGO dedicated to
					bringing hope, care, and strength to patients, caregivers,
					and healthcare professionals across India. Our focus is on
					creating a warm and inclusive space where everyone’s needs
					are heard and met. Whether it’s providing a comforting word,
					nutritional advice, or practical help, we’re here to make
					the journey a little easier. We work closely with healthcare
					providers, volunteers, and generous donors to reach those
					who need us most, ensuring that no one is left without the
					support they deserve.
				</p>
			</div>
		</div>
	);
};

export default About;

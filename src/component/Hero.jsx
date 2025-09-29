import {Link, useNavigate} from 'react-router-dom';
const Hero = () => {
	const navigate = useNavigate();
	return (
		<div className='heroSection relative px-[2rem] py-[4rem] bg-cover bg-center bg-[url(https://i.pinimg.com/736x/a4/e1/74/a4e17404053c4d874e6cb11b7157f56f.jpg)] h-[50vh] lg:h-[70vh] lg:px-[10rem] lg:py-[10rem] '>
			<div className='absolute inset-0 bg-black/40  '></div>

			<div className='flex flex-col gap-4'>
				<h1 className='text-4xl/12  text-white drop-shadow-lg font-bold '>
					Ace Your ILETS Exam
				</h1>
				<p className='text-lg/4  text-gray-300 drop-shadow-md font-bold w-[20rem] mt-4 '>
					Achieve your desired band score with our comprehensive ILETS
					preparation courses , resourcess and expert guidance.
				</p>

				

				<button onClick={()=>navigate('/courses')}   className='bg-blue-600 text-white px-4 py-2 rounded-md drop-shadow-md  w-[10rem] mt-8 hover:bg-blue-800'>
					Explore Courses
				</button>
			</div>
		</div>

	);
};

export default Hero;

import React from "react";

const Testimonials = () => {
	return (
		<div className='px-[2rem] mt-4 '>
			<h1 className='text-4xl font-semibold'>Student Testimonials</h1>
			<div className='flex gap-10 mt-4 flex-wrap grid  lg:grid-cols-3 lg:gap-[49vw]'>
				<card className='border p-4  flex flex-col gap-3 rounded-md w-full h-[12rem] lg:w-[40vw] '>
					<h1 className='text-xl text-blue-600 font-thin lg:text-2xl'>
						Sophia Carter
					</h1>
					<span className='text-bold text-xl '>5 star</span>

					<p className='text-sm/6 lg:text-lg/8'>
						ILETS Prep transformed my ILETS preparation. The mock
						tests and personalized coaching helped me achieve my
						target band score of 8.5!
					</p>
				</card>

				<card className='border p-4  flex flex-col gap-3 rounded-md w-full h-[12rem]  lg:w-[40vw]'>
					<h1 className='text-xl text-blue-600 font-thin'>
						Ethan Bennett
					</h1>
					<span className='t ext-bold text-xl'>4.5 star</span>

					<p className='text-sm/6 lg:text-lg/8'>
						The coaching was excellent , and I felt well-prepared
						for the exam.Highly recommended.
					</p>
				</card>
			</div>
		</div>
	);
};

export default Testimonials;

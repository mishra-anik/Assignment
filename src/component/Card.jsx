const Card = () => {
	return (
		<div className='grid grid-cols-2 gap-10 mt-4 lg:grid-cols-4 md:grid-cols-2 '>
			<card className='border p-4  flex flex-col gap-3 rounded-md w-[10rem] h-[12rem] lg:w-[15rem] lg:h-[15rem] lg:gap-5 md:w-[15rem] md:h-[12rem]'>
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
					class='lucide text-blue-600 lucide-mic-icon lucide-mic'
				>
					<path d='M12 19v3' />
					<path d='M19 10v2a7 7 0 0 1-14 0v-2' />
					<rect x='9' y='2' width='6' height='13' rx='3' />
				</svg>
				<h1 className='text-xl font-bold'>Speaking Practice</h1>
				<p className='text-sm/4 lg:text-xl/6'>
					Practice with interactive exercises.
				</p>
			</card>

			<card className='border p-4  flex flex-col gap-3 rounded-md w-[10rem] h-[12rem] lg:w-[15rem] lg:h-[15rem] lg:gap-5 md:w-[15rem] md:h-[12rem] '>
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
					class='lucide text-blue-600 lucide-file-icon lucide-file'
				>
					<path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
					<path d='M14 2v4a2 2 0 0 0 2 2h4' />
				</svg>
				<h1 className='text-xl font-bold'>Mock Test</h1>
				<p className='text-sm/4 lg:text-xl/6'>
					Simulate the real exam environment.
				</p>
			</card>

			<card className='border p-4  flex flex-col gap-3 rounded-md w-[10rem] h-[12rem] lg:w-[15rem] lg:h-[15rem] lg:gap-5 md:w-[15rem] md:h-[12rem] '>
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
					class='lucide text-blue-600 lucide-bot-icon lucide-bot'
				>
					<path d='M12 8V4H8' />
					<rect width='16' height='12' x='4' y='8' rx='2' />
					<path d='M2 14h2' />
					<path d='M20 14h2' />
					<path d='M15 13v2' />
					<path d='M9 13v2' />
				</svg>
				<h1 className='text-xl font-bold'>AI Band Score</h1>
				<p className='text-sm/4 lg:text-xl/6'>
					Get an estimated band score.
				</p>
			</card>

			<card className='border p-4  flex flex-col gap-3 rounded-md w-[10rem] h-[12rem] lg:w-[15rem] lg:h-[15rem] lg:gap-5 md:w-[15rem] md:h-[12rem] '>
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
					class='lucide text-blue-600 lucide-user-star-icon lucide-user-star'
				>
					<path d='M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z' />
					<path d='M8 15H7a4 4 0 0 0-4 4v2' />
					<circle cx='10' cy='7' r='4' />
				</svg>
				<h1 className='text-xl font-bold'>Personallized Coaching</h1>
				<p className='text-sm/4 lg:text-xl/6'>
					Receive personallized coaching.
				</p>
			</card>
		</div>
	);
};

export default Card;

import Translation from '@/src/translation/Translation'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsCodeSlash, BsFillLightningFill, BsGlobe, BsServer, BsWindowPlus, BsWrench } from 'react-icons/bs'

export default function AboutUs() {
	return (
		<div className='container'>
			<div className='flex items-center mt-28'>
				<div className='w-3/6'>
					<p className='text-sm mb-5 text-gray-200 font-medium'>OUR WORK</p>
					<h3 className='text- text-4xl font-bold'>We help businesses to make their product come to life, worldwide.</h3>
				</div>
				<div className='w-3/6 text-gray-200 flex justify-end'>
					<div className='w-2/3'>
						<p className='mb-8'>Our experience has helped our clients launch new companies in the digital arena throughtout the years. Take a look at some of our greatest work.</p>
						<Link href={'#'} className='text-blue font-semibold bg-blue-bg px-10 py-3 rounded-full'>See all works</Link>
					</div>
				</div>
			</div>

			<div className="overflow-x-auto flex mt-20 gap-x-14 portfolio-home">
				<div className="flex-none">
					<div className="w-[450px] h-auto pb-10">
						<img src="https://i.imgur.com/YjnMEqR.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold'>Bloomey, housplants store</h4>
								<p>Website development</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="w-[450px] h-auto pb-10">
						<img src="https://i.imgur.com/M63CRTT.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold'>Bloomey, housplants store</h4>
								<p>Website development</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="w-[450px] h-auto pb-10">
						<img src="https://i.imgur.com/4oZdG8S.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold'>Bloomey, housplants store</h4>
								<p>Website development</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="w-[450px] h-auto pb-10">
						<img src="https://i.imgur.com/IlArnY5.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold'>Bloomey, housplants store</h4>
								<p>Website development</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}

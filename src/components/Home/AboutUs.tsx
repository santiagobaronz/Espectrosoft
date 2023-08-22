import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsCodeSlash, BsFillLightningFill, BsGlobe, BsServer, BsWindowPlus, BsWrench } from 'react-icons/bs'

export default function AboutUs() {

	const tsHomepage = useTranslations('homePage')

	return (
		<div className='container'>
			<div className='lg:flex items-center mt-28'>
				<div className='lg:w-3/6'>
					<p className='text-sm mb-5 text-gray-200 font-medium'>{tsHomepage('our_work')}</p>
					<h3 className='text- text-4xl font-bold'>{tsHomepage('work_title')}</h3>
				</div>
				<div className='lg:w-3/6 text-gray-200 flex justify-end'>
					<div className='lg:w-2/3'>
						<p className='mb-8 max-lg:mt-7'>{tsHomepage('work_description')}</p>
						<Link href={'#'} className='text-blue font-semibold bg-blue-bg px-10 py-3 rounded-full'>{tsHomepage('work_button')}</Link>
					</div>
				</div>
			</div>

			<div className="overflow-x-auto flex mt-20 gap-x-14 portfolio-home">
				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/s3l9j1l.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>Servismile | Consultorio odontologico</h4>
								<p>{tsHomepage('work_card_description')}</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://i.imgur.com/1DoPKLC.png" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>Latin American Aeronautics | Aviación</h4>
								<p>{tsHomepage('work_card_description')}</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/jfv8l3j.png" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
							<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>IVAO Ecuador | Simuladores Virtuales</h4>
								<p>{tsHomepage('work_card_description')}</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://i.imgur.com/IlArnY5.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div className='w-11/12 whitespace-nowrap text-ellipsis overflow-hidden'>
							<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>Servismile | Consultorio odontologico</h4>
								<p>{tsHomepage('work_card_description')}</p>
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

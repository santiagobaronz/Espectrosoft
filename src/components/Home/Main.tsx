import Link from 'next/link'
import React from 'react'
import { BsStars } from 'react-icons/bs'

export default function Main() {
	return (
		<div>
			<div className='container bg-header w-full py-24 flex items-center'>
				<div className='w-2/4'>

					<div className='bg-blue-bg px-5 py-2 rounded-full text-sm text-gray-200 flex items-center gap-x-2 w-80'>
						<BsStars></BsStars>
						<p>Preparados para nuevos proyectos</p>
					</div>

					<h1 className='text-[55px] leading-[1.10] font-semibold mb-5 mt-8'>Soluciones <span className='text-blue'>Web</span> que impulsan tu éxito en <span className='text-blue'>internet</span></h1>
					<p className='text-lg'>El futuro de tu negocio se encuentra en la web, y nosotros estamos aquí para construirlo. Te ofrecemos soluciones web personalizadas, basadas en tecnología de vanguardia y diseñadas para impulsar tu crecimiento y éxito.</p>

					<div className='flex items-center gap-x-16 mt-8'>
						<div>
							<div className="flex -space-x-2">
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-black bg-blue-bg border-2 border-[#ccc] rounded-full hover:bg-gray-600 dark:border-gray-800">+10</span>
							</div>
							<p className='text-sm text-gray mt-2'>Únete a la comunidad de clientes</p>
						</div>

						<Link href={'#'} className='px-10 py-4 rounded-full bg-blue text-white font-medium'>Hablar con un especialista</Link>
					</div>


				</div>
			</div>
		</div>
	)
}

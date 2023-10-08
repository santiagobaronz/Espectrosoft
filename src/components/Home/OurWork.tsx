import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsCodeSlash, BsFillLightningFill, BsGlobe, BsServer, BsWindowPlus, BsWrench } from 'react-icons/bs'

export default function OurWork() {

	return (
		<div className='container max-lg:px-10'>
			<div className='lg:flex items-center mt-20 justify-center'>
				<div className='xl:w-4/6 lg:text-center'>
					<p className='text-sm mb-5 text-gray-200 font-medium'>NUESTRO TRABAJO</p>
					<h3 className='text-4xl font-bold'>Ayudamos a las empresas a dar vida a sus productos en todo el mundo.</h3>
					<p className='mb-8 max-lg:mt-7 text-gray-200 mt-5 text-lg'>Nuestra experiencia ha ayudado a nuestros clientes a lanzar nuevas empresas en el ámbito digital a lo largo de los años. Echa un vistazo a algunos de nuestros mejores trabajos.</p>
					<Link href={'#'} className='text-blue lg:hidden font-semibold bg-blue-bg px-10 py-3 rounded-full'>Ver todos los trabajos</Link>
				</div>
			</div>

			<div className="overflow-x-auto flex lg:mt-10 mt-16 gap-x-14 portfolio-home">
				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/2oKy1aR.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div className='w-9/12'>
								<h4 className='text-xl font-semibold whitespace-nowrap text-ellipsis overflow-hidden'>Servismile | Consultorio odontologico</h4>
								<p>Diseño y desarrollo web</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/BjPbvZR.png" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div className='w-9/12'>
								<h4 className='text-xl font-semibold  whitespace-nowrap text-ellipsis overflow-hidden'>Latin American Aeronautics | Aviación</h4>
								<p>Diseño y desarrollo web</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/BsOIkEO.png" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div className='w-9/12'>
								<h4 className='text-xl font-semibold  whitespace-nowrap text-ellipsis overflow-hidden'>IVAO Ecuador | Simulación Área</h4>
								<p>Diseño y desarrollo web</p>
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
							<div className='w-9/12'>
								<h4 className='text-xl font-semibold  whitespace-nowrap text-ellipsis overflow-hidden'>Servicesmile | Consultorio odontologico</h4>
								<p>Diseño y desarrollo web</p>
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
